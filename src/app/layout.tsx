import RootDocument, { buildMetadata } from "@/components/RootDocument";
import "./globals.css";

export const metadata = buildMetadata("en");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <RootDocument>{children}</RootDocument>;
}
