import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function restoreGitHubPagesRoute() {
  const params = new URLSearchParams(window.location.search);
  const preservedPath = params.get("p");

  if (!preservedPath?.startsWith("/")) return;

  const restoredUrl = `${preservedPath}${window.location.hash}`;
  window.history.replaceState(null, "", restoredUrl);
}

restoreGitHubPagesRoute();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Index page="shop" />} />
          <Route path="/shop" element={<Index page="shop" />} />
          <Route path="/custom-design" element={<Index page="custom-design" />} />
          <Route path="/web-design" element={<Index page="web-design" />} />
          <Route path="/websites" element={<Index page="websites" />} />
          <Route path="/refund-policy" element={<Index page="refund-policy" />} />
          <Route path="/shipping-policy" element={<Index page="shipping-policy" />} />
          <Route path="/privacy-policy" element={<Index page="privacy-policy" />} />
          <Route path="/terms-of-service" element={<Index page="terms-of-service" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
