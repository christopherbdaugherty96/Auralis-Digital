import AuralisHomepage from "@/components/AuralisHomepage";

type AuralisPage =
  | "home"
  | "shop"
  | "custom-design"
  | "web-design"
  | "websites"
  | "refund-policy"
  | "shipping-policy"
  | "privacy-policy"
  | "terms-of-service";

const Index = ({ page = "home" }: { page?: AuralisPage }) => <AuralisHomepage page={page} />;

export default Index;
