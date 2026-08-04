import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Publications } from "@/components/sections/publications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
