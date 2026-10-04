import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="container flex flex-col gap-6 py-14 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-display text-5xl leading-none sm:text-6xl">Let's build something.</p>
        <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
          {profile.email}
        </a>
      </div>
      <div className="flex gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-foreground">Résumé</a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
