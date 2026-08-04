import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/resume";

const stats = [
  { value: "5+", label: "Years in data & security" },
  { value: "4", label: "Companies worked with" },
  { value: "2", label: "IEEE publications" },
];

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24">
      <SectionHeading eyebrow="About" title="Who I am" />
      <div className="grid gap-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass flex items-center gap-4 rounded-xl p-5"
            >
              <div className="text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
