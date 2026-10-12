import RootDocument, { buildMetadata } from "@/components/RootDocument";
import "../globals.css";

export const metadata = buildMetadata("fr");

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="fr">{children}</RootDocument>;
}
