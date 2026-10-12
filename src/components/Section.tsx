import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 md:py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-gradient-accent" />
      </Reveal>
      {children}
    </section>
  );
}
