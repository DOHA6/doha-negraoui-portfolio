import Reveal from "@/components/Reveal";
import type { TimelineItem } from "@/data/portfolio";

export default function Timeline({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-6 text-xl font-bold text-foreground sm:mb-8">{heading}</h3>
      <ol className="relative ml-2 space-y-6 border-l-2 border-border pl-5 sm:ml-0 sm:space-y-8 sm:pl-8">
        {items.map((item, i) => (
          <li key={`${item.title}-${item.organisation}`} className="relative">
            <span className="absolute -left-[29px] top-6 flex h-4 w-4 items-center justify-center sm:-left-[41px]">
              <span className="absolute h-full w-full animate-ping rounded-full bg-accent-light/50" />
              <span className="relative h-3 w-3 rounded-full bg-gradient-accent" />
            </span>
            <Reveal from="right" delay={i * 120}>
              <div className="rounded-2xl border border-border bg-white p-5 shadow-md sm:p-6 shadow-brand-100/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-200/70">
                <p className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-accent">
                  {item.period}
                </p>
                <h4 className="mt-3 text-lg font-bold text-foreground">{item.title}</h4>
                <p className="font-medium text-accent">{item.organisation}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {item.tools && item.tools.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.tools.map((tool) => (
                      <li key={tool} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
