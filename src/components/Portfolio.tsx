import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import Avatar from "@/components/Avatar";
import Expandable from "@/components/Expandable";
import { content, langPaths, shared, type Lang } from "@/data/portfolio";

const skillIconPaths = [
  "M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12",
  "M4 6h16v5H4zM4 13h16v5H4zM7.5 8.5h.01M7.5 15.5h.01",
  "M3 5h18v14H3zM3 9h18M8 9v10",
  "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  "M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7z",
  "M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3zM9 12l2 2 4-4",
];
const badgePositions = [
  { className: "-left-3 top-2 sm:-left-6 sm:top-6", delay: "0s" },
  { className: "-right-3 top-12 sm:-right-10 sm:top-16", delay: "1.5s" },
  { className: "-left-4 bottom-12 sm:-left-10 sm:bottom-16", delay: "3s" },
  { className: "-right-2 bottom-0 sm:-right-4 sm:bottom-4", delay: "4.5s" },
];

const mailto = `mailto:${shared.email}`;
const tel = `tel:${shared.phone.replace(/[^\d+]/g, "")}`;

const contactIcons = {
  location: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  email: "M3 6h18v12H3zM3 7l9 6 9-6",
  phone:
    "M5 4h3.5l1.5 4.5-2.25 1.5a11 11 0 0 0 6.25 6.25L15.5 14l4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
};

function ContactIcon({ path }: { path: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
        <path d={path} />
      </svg>
    </span>
  );
}

export default function Portfolio({ lang }: { lang: Lang }) {
  const c = content[lang];
  const { ui } = c;
  const featured = c.projects.filter((p) => p.featured);
  const others = c.projects.filter((p) => !p.featured);
  const socials = [
    { label: "GitHub", href: shared.github },
    { label: "LinkedIn", href: shared.linkedin },
    { label: "Email", href: mailto },
  ];
  const stats = [
    { value: `${c.projects.length}+`, label: ui.stats.projects },
    { value: `${c.skillGroups.reduce((n, g) => n + g.skills.length, 0)}+`, label: ui.stats.technologies },
    { value: `${c.experience.length}`, label: ui.stats.internships },
  ];

  return (
    <div lang={lang} className="flex flex-1 flex-col">
      <Navbar
        name={shared.name}
        logo={shared.logo}
        lang={lang}
        switchHref={lang === "en" ? langPaths.fr : langPaths.en}
        resumeUrl={c.resumeUrl}
        ui={ui}
      />

      {/* Hero */}
      <section id="top" className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-24 md:pb-0 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-brand-200/60 blur-3xl" />
          <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-200/60 blur-3xl [animation-delay:4s]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-brand-100/70 blur-3xl [animation-delay:8s]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,#e8d6bf_1px,transparent_1px)] bg-size-[28px_28px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-6 md:grid-cols-[1.3fr_1fr] md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <Reveal from="left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm sm:tracking-[0.3em]">{ui.greeting}</p>
            </Reveal>
            <Reveal from="left" delay={150}>
              <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.1] tracking-tight break-words sm:text-6xl lg:text-7xl">
                <span className="text-gradient">{shared.name}</span>
              </h1>
            </Reveal>
            <Reveal from="left" delay={300}>
              <h2 className="mt-3 min-h-[2.6em] text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-5xl">
                {ui.iAm} <Typewriter words={c.roles} />
              </h2>
            </Reveal>
            <Reveal from="left" delay={450}>
              <p className="mt-5 text-base font-bold text-foreground sm:text-lg">
                {c.headline} <span className="text-accent">— {c.tagline}</span>
              </p>
              <p className="mt-3 max-w-xl text-muted">{c.summary}</p>
            </Reveal>
            <Reveal from="left" delay={600}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#projects"
                  className="bg-gradient-accent group inline-flex animate-glow items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-right"
                >
                  {ui.ctaPrimary}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#contact"
                  className="rounded-full border-2 border-accent px-8 py-3.5 text-center font-semibold text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-brand-300/60"
                >
                  {ui.ctaSecondary}
                </a>
              </div>
            </Reveal>
            <Reveal from="left" delay={750}>
              <ul className="mt-8 flex flex-wrap gap-3 sm:mt-10">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-medium text-muted backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-md hover:shadow-brand-200"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal from="zoom" delay={300} className="flex justify-center">
            <div className="relative animate-float">
              <Avatar />
              {shared.heroBadges.map((label, i) => (
                <span
                  key={label}
                  style={{ animationDelay: badgePositions[i % badgePositions.length].delay }}
                  className={`absolute ${badgePositions[i % badgePositions.length].className} animate-float whitespace-nowrap rounded-full border border-border bg-white/90 px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm text-accent shadow-lg shadow-brand-200/70 backdrop-blur`}
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label={ui.scrollDown}
          className="absolute bottom-8 left-1/2 hidden h-12 w-7 -translate-x-1/2 justify-center rounded-full border-2 border-accent/60 pt-2 md:flex"
        >
          <span className="h-2.5 w-1 animate-bounce rounded-full bg-accent" />
        </a>
      </section>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-6">
        <Section id="about" eyebrow={ui.about.eyebrow} title={ui.about.title}>
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
            <Reveal from="left" className="flex justify-center">
              <Avatar size="md" />
            </Reveal>
            <div className="min-w-0">
              <Reveal from="right">
                <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                  {c.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal from="zoom">
                <dl className="mt-10 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-white shadow-md shadow-brand-100/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-200/70">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex min-w-0 flex-col items-center px-2 py-4 text-center sm:px-4 sm:py-6">
                      <dt className="order-2 mt-1 w-full text-[11px] font-medium leading-tight text-muted [overflow-wrap:anywhere] sm:text-sm">
                        {stat.label}
                      </dt>
                      <dd className="order-1 text-2xl font-extrabold sm:text-4xl">
                        <span className="text-gradient">{stat.value}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow={ui.skills.eyebrow} title={ui.skills.title}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 3) * 120}>
                <div className="group h-full rounded-2xl border border-border bg-white p-5 shadow-md sm:p-6 shadow-brand-100/60 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-brand-200/80">
                  <span className="bg-gradient-accent flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg shadow-brand-300/60 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 fill-none stroke-white stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                      <path d={skillIconPaths[i % skillIconPaths.length]} />
                    </svg>
                  </span>
                  <h3 className="mb-4 mt-5 text-lg font-bold text-foreground">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="cursor-default rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow={ui.projects.eyebrow} title={ui.projects.title}>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {featured.map((project, i) => (
              <Reveal key={project.title} from={i % 2 === 0 ? "left" : "right"} className="h-full">
                <ProjectCard project={project} labels={ui.projects} />
              </Reveal>
            ))}
          </div>
          {others.length > 0 && (
            <Expandable
              showLabel={`${ui.projects.showMore} (${others.length})`}
              hideLabel={ui.projects.showLess}
            >
              <h3 className="mb-8 mt-14 text-center text-2xl font-bold text-foreground">{ui.projects.others}</h3>
              <div className={`grid gap-6 md:gap-8 ${others.length === 1 ? "mx-auto max-w-xl" : "md:grid-cols-2"}`}>
                {others.map((project, i) => (
                  <Reveal key={project.title} delay={i * 120} className="h-full">
                    <ProjectCard project={project} labels={ui.projects} />
                  </Reveal>
                ))}
              </div>
            </Expandable>
          )}
        </Section>

        <Section id="experience" eyebrow={ui.journey.eyebrow} title={ui.journey.title}>
          <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
            <Timeline heading={ui.journey.experience} items={c.experience} />
            <div className="min-w-0 space-y-12 lg:space-y-14">
              <Timeline heading={ui.journey.education} items={c.education} />
              {c.certifications.length > 0 && (
                <Reveal>
                  <h3 className="mb-5 text-xl font-bold text-foreground">{ui.journey.certifications}</h3>
                  <ul className="space-y-3">
                    {c.certifications.map((cert) => (
                      <li
                        key={cert}
                        className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-muted shadow-sm shadow-brand-100 transition-all duration-300 hover:translate-x-1 hover:border-accent/40"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-accent" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              {c.activities.length > 0 && (
                <Reveal>
                  <h3 className="mb-5 text-xl font-bold text-foreground">{ui.journey.activities}</h3>
                  <ul className="space-y-3">
                    {c.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-muted shadow-sm shadow-brand-100 transition-all duration-300 hover:translate-x-1 hover:border-accent/40"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-accent" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow={ui.contact.eyebrow} title={ui.contact.title}>
          <Reveal from="zoom">
            <div className="bg-gradient-accent relative overflow-hidden rounded-3xl px-5 py-12 text-center text-white shadow-2xl shadow-brand-300/60 animate-gradient sm:px-8 sm:py-16 md:px-16">
              <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 animate-blob rounded-full bg-white/15 blur-2xl" />
              <div aria-hidden className="absolute -bottom-20 -left-10 h-72 w-72 animate-blob rounded-full bg-brand-300/30 blur-2xl [animation-delay:5s]" />
              <div className="relative">
                <h3 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">{ui.contact.heading}</h3>
                <p className="mx-auto mt-4 max-w-2xl text-brand-50">{ui.contact.body}</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href={mailto}
                    className="rounded-full bg-white px-8 py-4 text-center font-semibold text-accent shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    {ui.contact.email}
                  </a>
                  <a
                    href={c.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-white/80 px-8 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-accent"
                  >
                    {ui.contact.cv}
                  </a>
                </div>
                <div className="mt-8 flex flex-col items-center gap-3 text-sm text-brand-100 [overflow-wrap:anywhere] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
                  <span className="inline-flex items-center gap-2">
                    <ContactIcon path={contactIcons.location} />
                    {c.location}
                  </span>
                  <a href={mailto} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                    <ContactIcon path={contactIcons.email} />
                    {shared.email}
                  </a>
                  <a href={tel} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                    <ContactIcon path={contactIcons.phone} />
                    {shared.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="mt-10 border-t border-border px-5 py-8 text-center text-sm text-muted">
        {ui.footer} <span className="font-semibold text-accent">{shared.name}</span> — Next.js &amp; Tailwind CSS
      </footer>
    </div>
  );
}
