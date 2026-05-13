import AuralisHomepage from "@/components/AuralisHomepage";

type AuralisPage = "home" | "shop" | "web-design" | "websites";

const Index = ({ page = "home" }: { page?: AuralisPage }) => <AuralisHomepage page={page} />;

export default Index;
