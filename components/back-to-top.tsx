"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const about = document.getElementById("about");
    const onScroll = () => {
      // show once the About section has scrolled out of view above the viewport
      const past = about ? about.getBoundingClientRect().bottom < 0 : false;
      setVisible(past);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
