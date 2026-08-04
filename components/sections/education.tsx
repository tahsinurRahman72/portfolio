import { GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] backdrop-blur-md py-24 shadow-inner"
    >
      <div className="container">
        <SectionHeading eyebrow="Education" title="My academic journey" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.1}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="flex gap-4 p-6">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{edu.school}</h3>
                    <p className="mt-0.5 font-medium text-primary">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.detail}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
