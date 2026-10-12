import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import Avatar from "@/components/Avatar";
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
  { className: "-left-6 top-6", delay: "0s" },
  { className: "-right-10 top-16", delay: "1.5s" },
  { className: "-left-10 bottom-16", delay: "3s" },
  { className: "-right-4 bottom-4", delay: "4.5s" },
];

export default function Portfolio({ lang }: { lang: Lang }) {
  const c = content[lang];
  const { ui } = c;
  const featured = c.projects.filter((p) => p.featured);
  const others = c.projects.filter((p) => !p.featured);
  const socials = [
    { label: "GitHub", href: shared.github },
    { label: "LinkedIn", href: shared.linkedin },
    { label: "Email", href: `mailto:${shared.email}` },
  ];
  const stats = [
    { value: `${c.projects.length}+`, label: ui.stats.projects },
    { value: `${c.skillGroups.reduce((n, g) => n + g.skills.length, 0)}+`, label: ui.stats.technologies },
    { value: `${c.experience.length}`, label: ui.stats.internships },
  ];

  return (
    <>
      <Navbar
        name={shared.name}
        logo={shared.logo}
        lang={lang}
        switchHref={lang === "en" ? langPaths.fr : langPaths.en}
        resumeUrl={c.resumeUrl}
        ui={ui}
      />

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-brand-200/60 blur-3xl" />
          <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-200/60 blur-3xl [animation-delay:4s]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-brand-100/70 blur-3xl [animation-delay:8s]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,#e8d6bf_1px,transparent_1px)] bg-size-[28px_28px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal from="left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{ui.greeting}</p>
            </Reveal>
            <Reveal from="left" delay={150}>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                <span className="text-gradient">{shared.name}</span>
              </h1>
            </Reveal>
            <Reveal from="left" delay={300}>
              <h2 className="mt-2 min-h-[2.6em] text-3xl font-bold leading-tight text-foreground md:text-4xl lg:min-h-[1.3em] lg:text-5xl">
                {ui.iAm} <Typewriter words={c.roles} />
              </h2>
            </Reveal>
            <Reveal from="left" delay={450}>
              <p className="mt-6 text-lg font-bold text-foreground">
                {c.headline} <span className="text-accent">— {c.tagline}</span>
              </p>
              <p className="mt-3 max-w-xl text-muted">{c.summary}</p>
            </Reveal>
            <Reveal from="left" delay={600}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="bg-gradient-accent group inline-flex animate-glow items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-right"
                >
                  {ui.ctaPrimary}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#contact"
                  className="rounded-full border-2 border-accent px-8 py-3.5 font-semibold text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-brand-300/60"
                >
                  {ui.ctaSecondary}
                </a>
              </div>
            </Reveal>
            <Reveal from="left" delay={750}>
              <ul className="mt-10 flex gap-3">
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
                  className={`absolute ${badgePositions[i % badgePositions.length].className} animate-float rounded-full border border-border bg-white/90 px-4 py-2 text-sm font-semibold text-accent shadow-lg shadow-brand-200/70 backdrop-blur`}
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

      <main className="mx-auto w-full max-w-6xl flex-1 px-6">
        <Section id="about" eyebrow={ui.about.eyebrow} title={ui.about.title}>
          <div className="grid items-center gap-14 md:grid-cols-[auto_1fr]">
            <Reveal from="left" className="flex justify-center">
              <Avatar size="md" />
            </Reveal>
            <div>
              <Reveal from="right">
                <div className="space-y-4 text-lg leading-relaxed text-muted">
                  {c.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <Reveal key={stat.label} from="zoom" delay={i * 120}>
                    <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-md shadow-brand-100/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-200/70">
                      <p className="text-3xl font-extrabold">
                        <span className="text-gradient">{stat.value}</span>
                      </p>
                      <p className="mt-1 text-xs font-medium text-muted md:text-sm">{stat.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow={ui.skills.eyebrow} title={ui.skills.title}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 3) * 120}>
                <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-md shadow-brand-100/60 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-brand-200/80">
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
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.title} from={i % 2 === 0 ? "left" : "right"} className="h-full">
                <ProjectCard project={project} labels={ui.projects} />
              </Reveal>
            ))}
          </div>
          {others.length > 0 && (
            <>
              <Reveal>
                <h3 className="mb-8 mt-16 text-center text-2xl font-bold text-foreground">{ui.projects.others}</h3>
              </Reveal>
              <div className="grid gap-8 md:grid-cols-2">
                {others.map((project, i) => (
                  <Reveal key={project.title} delay={i * 120} className="h-full">
                    <ProjectCard project={project} labels={ui.projects} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Section>

        <Section id="experience" eyebrow={ui.journey.eyebrow} title={ui.journey.title}>
          <div className="grid gap-14 md:grid-cols-2">
            <Timeline heading={ui.journey.experience} items={c.experience} />
            <div className="space-y-14">
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
            <div className="bg-gradient-accent relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white shadow-2xl shadow-brand-300/60 animate-gradient md:px-16">
              <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 animate-blob rounded-full bg-white/15 blur-2xl" />
              <div aria-hidden className="absolute -bottom-20 -left-10 h-72 w-72 animate-blob rounded-full bg-brand-300/30 blur-2xl [animation-delay:5s]" />
              <div className="relative">
                <h3 className="text-3xl font-extrabold md:text-4xl">{ui.contact.heading}</h3>
                <p className="mx-auto mt-4 max-w-2xl text-brand-50">{ui.contact.body}</p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${shared.email}`}
                    className="rounded-full bg-white px-8 py-4 font-semibold text-accent shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    {ui.contact.email}
                  </a>
                  <a
                    href={c.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-white/80 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-accent"
                  >
                    {ui.contact.cv}
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-brand-100">
                  <span>{c.location}</span>
                  <a href={`mailto:${shared.email}`} className="hover:text-white">{shared.email}</a>
                  <a href={`tel:${shared.phone.replace(/\s/g, "")}`} className="hover:text-white">{shared.phone}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="mt-10 border-t border-border py-8 text-center text-sm text-muted">
        {ui.footer} <span className="font-semibold text-accent">{shared.name}</span> — Next.js &amp; Tailwind CSS
      </footer>
    </>
  );
}
