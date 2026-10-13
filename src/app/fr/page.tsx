import Portfolio from "@/components/Portfolio";
import { buildMetadata } from "@/components/RootDocument";

export const metadata = buildMetadata("fr");

export default function Accueil() {
  return <Portfolio lang="fr" />;
}
