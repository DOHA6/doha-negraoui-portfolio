import RootDocument, { buildMetadata } from "@/components/RootDocument";
import "../globals.css";

export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
