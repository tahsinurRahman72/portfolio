import { MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="A concise trail through cybersecurity, AI training, product tech, and data annotation."
      />

      <div className="relative">
        {/* timeline spine */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-primary via-border to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <div className="relative pl-10 sm:pl-12">
                {/* node */}
                <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />

                <div className="glass rounded-xl p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold">
                      {exp.role}
                      <span className="text-primary"> · {exp.company}</span>
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
