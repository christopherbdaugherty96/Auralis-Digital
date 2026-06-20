import AuralisHomepage from "@/components/AuralisHomepage";

type AuralisPage =
  | "home"
  | "shop"
  | "collections"
  | "creator-shops"
  | "custom-design"
  | "web-design"
  | "websites"
  | "pour-social"
  | "refund-policy"
  | "shipping-policy"
  | "privacy-policy"
  | "terms-of-service";

const Index = ({ page = "home" }: { page?: AuralisPage }) => <AuralisHomepage page={page} />;

export default Index;
