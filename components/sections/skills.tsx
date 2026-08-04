import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] backdrop-blur-md py-24 shadow-inner">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Detection engineering and security tooling, backed by the data pipelines, scripting and cloud that keep telemetry flowing and analysis sharp."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.label} delay={i * 0.1}>
                <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{group.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
