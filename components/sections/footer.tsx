import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
