"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Content, Lang } from "@/data/portfolio";

type NavbarProps = {
  name: string;
  logo?: string;
  lang: Lang;
  switchHref: string;
  resumeUrl: string;
  ui: Content["ui"];
};

export default function Navbar({ name, logo, lang, switchHref, resumeUrl, ui }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const links = [
    { href: "#about", label: ui.nav.about },
    { href: "#skills", label: ui.nav.skills },
    { href: "#projects", label: ui.nav.projects },
    { href: "#experience", label: ui.nav.experience },
    { href: "#contact", label: ui.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const langSwitch = (
    <Link
      href={switchHref}
      scroll={false}
      replace
      title={ui.switchLabel}
      aria-label={ui.switchLabel}
      className="flex shrink-0 items-center rounded-full border border-border bg-white/80 p-1 text-xs font-bold"
    >
      {(["en", "fr"] as const).map((l) => (
        <span
          key={l}
          className={`rounded-full px-2.5 py-1 uppercase transition-all duration-300 ${
            l === lang ? "bg-gradient-accent text-white shadow-md shadow-brand-300/50" : "text-muted"
          }`}
        >
          {l}
        </span>
      ))}
    </Link>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 shadow-lg shadow-brand-100/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-18 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5 text-xl font-extrabold tracking-tight">
          {logo && (
            <Image
              src={logo}
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-full transition-transform duration-500 group-hover:rotate-[360deg]"
            />
          )}
          <span>
            <span className="text-gradient">{name.split(" ")[0]}</span>
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-foreground lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative py-1 transition-colors hover:text-accent">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-gradient-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>{langSwitch}</li>
          <li>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-accent rounded-full px-5 py-2.5 text-white shadow-md shadow-brand-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-400/60"
            >
              {ui.resume}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          {langSwitch}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 rounded bg-accent transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded bg-accent transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded bg-accent transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden bg-background/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-border" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 px-5 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-medium text-foreground hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pb-4">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="block py-3 font-semibold text-accent">
              {ui.resume}
            </a>
          </li>
        </ul>
      </div>

      <div className="h-[3px] bg-gradient-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </header>
  );
}
