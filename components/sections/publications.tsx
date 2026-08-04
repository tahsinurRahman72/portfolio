import { FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/resume";

export function Publications() {
  return (
    <section id="publications" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Research"
        title="Publications"
        description="Peer-reviewed work in machine learning, security and explainable AI."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.1}>
            <article className="glass group flex h-full flex-col rounded-xl p-6 transition-colors hover:border-primary/50">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <Badge variant="outline">{pub.venue}</Badge>
              </div>
              <h3 className="text-lg font-semibold leading-snug">
                {pub.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{pub.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
