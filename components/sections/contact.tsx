import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile, socialLinks } from "@/data/resume";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] backdrop-blur-md py-24 shadow-inner"
    >
      <div className="container">
        <Reveal className="glass relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something with data
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I&apos;m open to data science, machine learning and AI-focused
            roles. The fastest way to reach me is email - or connect on
            LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </Button>
            <div className="flex items-center gap-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
