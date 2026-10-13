import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-28">
      <Reveal className="mb-10 text-center md:mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-gradient-accent" />
      </Reveal>
      {children}
    </section>
  );
}
