import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Hand, Star } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/data/types";
import Poster from "./Poster";

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  useEffect(() => setPlaying(false), [project]);

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        // Keep the dialog scrolled to the top (video + title) instead of jumping to the first link.
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          (e.target as HTMLElement | null)?.focus({ preventScroll: true });
        }}
        className="block max-h-[92vh] max-w-3xl overflow-y-auto [&>button:last-child]:z-10 [&>button:last-child]:rounded-full [&>button:last-child]:bg-background [&>button:last-child]:p-1.5 [&>button:last-child]:opacity-100 rounded-2xl border bg-card p-0 focus:outline-none sm:rounded-2xl"
      >
        {project && (
          <>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-foreground">
              {playing && project.playable ? (
                <iframe
                  src={project.playable}
                  title={`${project.title}, live`}
                  allow="camera; microphone; autoplay; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : project.video ? (
                <video
                  key={project.video}
                  src={project.video}
                  poster={project.image}
                  autoPlay
                  controls
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={
                    project.fit === "contain"
                      ? "h-full w-full bg-secondary object-contain p-4"
                      : "h-full w-full object-cover object-top"
                  }
                />
              ) : (
                <Poster title={project.title} stat={project.posterStat} tags={project.technologies} className="p-8" />
              )}
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div className="space-y-2">
                {project.badge && <p className="eyebrow">{project.badge}</p>}
                <DialogTitle className="font-display text-4xl leading-tight">{project.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">{project.description}</DialogDescription>
              </div>

              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-3.5">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                      <Star className="mt-1 h-3.5 w-3.5 shrink-0 fill-foreground" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {(project.github || project.live || project.playable) && (
                <div className="flex flex-wrap gap-2 border-t pt-5">
                  {project.playable && !playing && (
                    <button
                      type="button"
                      onClick={() => {
                        setPlaying(true);
                        document.querySelector("[role=dialog]")?.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-85"
                    >
                      <Hand className="h-4 w-4" /> Play it here
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-85"
                    >
                      <Github className="h-4 w-4" /> View on GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:border-foreground"
                    >
                      {project.liveLabel || "Visit"} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
