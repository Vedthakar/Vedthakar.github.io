import { useState } from "react";
import { Github } from "lucide-react";
import { archive, projects, type Project } from "@/data/types";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="container py-20 sm:py-28">
      <SectionHeader
        index="01"
        kicker="Selected work"
        title="Projects"
        aside="Most impressive first. Hover a card to play its video, click it for what I built."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} large onOpen={() => setOpen(p)} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={() => setOpen(p)} />
        ))}
      </div>

      {archive.length > 0 && (
        <div className="mt-20">
          <p className="eyebrow mb-5">Earlier experiments</p>
          <ul className="divide-y border-y">
            {archive.map((a) => (
              <li key={a.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6">
                <span className="font-display text-xl sm:w-64 sm:shrink-0">{a.title}</span>
                <span className="flex-1 text-sm text-muted-foreground">{a.description}</span>
                <span className="flex items-center gap-3">
                  {a.video && (
                    <a href={a.video} target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                      Video
                    </a>
                  )}
                  {a.github && (
                    <a href={a.github} target="_blank" rel="noreferrer" aria-label={`${a.title} on GitHub`} className="text-muted-foreground hover:text-foreground">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
