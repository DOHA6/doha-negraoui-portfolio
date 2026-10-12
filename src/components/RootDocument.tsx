import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import { content, langPaths, shared, type Lang } from "@/data/portfolio";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function buildMetadata(lang: Lang): Metadata {
  const c = content[lang];
  return {
    title: `${shared.name} — ${c.role}`,
    description: c.summary,
    keywords: ["Software Engineer", "Full Stack Developer", "Java", "Spring Boot", "React", "Microservices", "ENSIAS", shared.name],
    alternates: { languages: { en: langPaths.en, fr: langPaths.fr } },
    openGraph: {
      title: `${shared.name} — ${c.role}`,
      description: c.summary,
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
  };
}

export default function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
