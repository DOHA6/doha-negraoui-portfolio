import DemoVideo from "@/components/DemoVideo";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  labels: { code: string; live: string; close: string };
};

const isUrl = (href?: string): href is string => !!href && /^https?:\/\//.test(href);

export default function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group relative h-full rounded-2xl bg-gradient-to-br from-brand-200 via-brand-100 to-brand-200 p-px transition-all duration-500 hover:-translate-y-2 hover:from-brand-600 hover:via-brand-400 hover:to-brand-500 hover:shadow-2xl hover:shadow-brand-300/60">
      <div className="flex h-full flex-col rounded-2xl bg-white p-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-lg text-white shadow-lg shadow-brand-300/60 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-xl">
            {"</>"}
          </span>
          <div className="flex flex-wrap justify-end gap-2 text-sm font-semibold">
            {isUrl(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3.5 py-1.5 text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md hover:shadow-brand-300/60"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
                {labels.code}
              </a>
            )}
            {isUrl(project.live) && (
              <DemoVideo
                src={project.live}
                title={project.title}
                label={labels.live}
                closeLabel={labels.close}
                className="bg-gradient-accent inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-white shadow-md shadow-brand-300/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-lg hover:shadow-brand-400/60"
              />
            )}
          </div>
        </div>

        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">{project.context}</p>
        <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-accent sm:text-xl">
          {project.title}
        </h3>
        <p className="mb-5 text-muted">{project.description}</p>

        <ul className="mb-6 space-y-2 text-sm text-muted">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-accent">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
