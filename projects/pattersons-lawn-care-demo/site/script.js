/* Patterson's Lawn Care & Snow Removal — script.js */

// ── Mobile nav toggle ──
const navToggle = document.getElementById('nav-toggle');
const mainNav   = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      closeNav();
      navToggle.focus();
    }
  });

  document.addEventListener('click', e => {
    if (
      mainNav.classList.contains('open') &&
      !mainNav.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeNav();
    }
  });
}

function closeNav() {
  if (!mainNav) return;
  mainNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
}

// ── Header elevation on scroll ──
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

// ── Footer year ──
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Phone field auto-format ──
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', e => {
    // Strip non-digits, cap at 10
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    e.target.value = formatted;
  });
}

// ── Estimate form ──
const form        = document.getElementById('estimate-form');
const formSuccess = document.getElementById('form-success');
const formError   = document.getElementById('form-error');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm(form)) return;
    submitForm();
  });

  // Per-field validation on blur
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      if (field.value.trim() || field.closest('.form-group').classList.contains('has-error')) {
        validateField(field);
      }
    });
    // Clear error as soon as user starts correcting
    field.addEventListener('input', () => {
      if (field.closest('.form-group').classList.contains('has-error')) {
        clearFieldError(field);
      }
    });
    field.addEventListener('change', () => {
      if (field.closest('.form-group').classList.contains('has-error')) {
        clearFieldError(field);
      }
    });
  });
}

function validateForm(f) {
  clearErrors(f);
  let firstError = null;

  f.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      markError(field, 'This field is required.');
      firstError = firstError || field;
    }
  });

  const phone = f.querySelector('#phone');
  if (phone && phone.value.trim() && !phone.closest('.form-group').classList.contains('has-error')) {
    if (phone.value.replace(/\D/g, '').length < 10) {
      markError(phone, 'Please enter a valid 10-digit phone number.');
      firstError = firstError || phone;
    }
  }

  const email = f.querySelector('#email');
  if (email && email.value.trim() && !email.closest('.form-group').classList.contains('has-error')) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      markError(email, 'Please enter a valid email address.');
      firstError = firstError || email;
    }
  }

  if (firstError) firstError.focus();
  return !firstError;
}

function validateField(field) {
  clearFieldError(field);

  if (field.required && !field.value.trim()) {
    markError(field, 'This field is required.');
    return false;
  }
  if (field.id === 'phone' && field.value.trim()) {
    if (field.value.replace(/\D/g, '').length < 10) {
      markError(field, 'Please enter a valid 10-digit phone number.');
      return false;
    }
  }
  if (field.id === 'email' && field.value.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      markError(field, 'Please enter a valid email address.');
      return false;
    }
  }
  return true;
}

function markError(field, msg) {
  const group = field.closest('.form-group');
  if (!group) return;

  group.classList.add('has-error');
  field.setAttribute('aria-invalid', 'true');

  const errorId = field.id + '-error';
  let errorEl = group.querySelector('.field-error');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'field-error';
    errorEl.id = errorId;
    errorEl.setAttribute('role', 'alert');
    // Insert after .select-wrap if present, otherwise after the field
    const insertAfter = field.closest('.select-wrap') || field;
    insertAfter.after(errorEl);
  }
  errorEl.textContent = msg;
  field.setAttribute('aria-describedby', errorId);
}

function clearFieldError(field) {
  const group = field.closest('.form-group');
  if (!group) return;
  group.classList.remove('has-error');
  group.querySelectorAll('.field-error').forEach(el => el.remove());
  field.removeAttribute('aria-invalid');
  field.removeAttribute('aria-describedby');
}

function clearErrors(f) {
  f.querySelectorAll('.form-group.has-error').forEach(group => {
    group.classList.remove('has-error');
  });
  f.querySelectorAll('.field-error').forEach(el => el.remove());
  f.querySelectorAll('[aria-invalid]').forEach(el => {
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  });
}

async function submitForm() {
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent.trim();

  btn.disabled = true;
  btn.textContent = 'Sending…';
  if (formSuccess) formSuccess.hidden = true;
  if (formError) formError.hidden = true;

  try {
    const endpoint = form.getAttribute('action') || '';
    if (!isConfiguredFormEndpoint(endpoint)) {
      throw new Error('Estimate form endpoint is not configured.');
    }

    const response = await fetch(endpoint, {
      method: form.getAttribute('method') || 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });

    if (!response.ok) {
      throw new Error('Form submission failed.');
    }

    form.reset();
    clearErrors(form);

    if (formSuccess) {
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } catch (error) {
    console.error(error);
    if (formError) {
      formError.hidden = false;
      formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } finally {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function isConfiguredFormEndpoint(endpoint) {
  return /^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(endpoint);
}

// ── Active nav link on scroll ──
const navSections = Array.from(document.querySelectorAll('section[id]'));
const navLinks    = document.querySelectorAll('.main-nav a[href^="#"]');
let activeId      = null;

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.dataset.visible = entry.isIntersecting ? '1' : '0';
    });

    const firstVisible = navSections.find(s => s.dataset.visible === '1');
    const nextId = firstVisible ? firstVisible.id : null;

    if (nextId !== activeId) {
      activeId = nextId;
      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === '#' + activeId;
        link.classList.toggle('active', matches);
        link.setAttribute('aria-current', matches ? 'true' : 'false');
      });
    }
  }, { rootMargin: '-10% 0px -70% 0px' });

  navSections.forEach(s => sectionObserver.observe(s));
}

// ── Scroll-to-top button ──
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Scroll-reveal for section content ──
const revealEls = document.querySelectorAll(
  '.service-card, .trust-item, .schedule-option, .gallery-item'
);

if (
  revealEls.length &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // Stagger siblings that appear together
      const delay = i * 60;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });
}
