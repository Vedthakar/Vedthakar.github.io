import { useRef, useState } from "react";
import { ArrowUpRight, Github, Play, Volume2, VolumeX } from "lucide-react";
import type { Project } from "@/data/types";
import { playPreview, useSound } from "@/lib/sound";
import { cn } from "@/lib/utils";
import Poster from "./Poster";

export default function ProjectCard({
  project,
  onOpen,
  large = false,
}: {
  project: Project;
  onOpen: () => void;
  large?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const sound = useSound();

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    playPreview(v).then(() => setPlaying(!v.paused));
  };
  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <article
      id={`project-${project.slug}`}
      className="card-lift group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${project.title}: open details`}
    >
      <div className={cn("relative overflow-hidden bg-secondary", large ? "aspect-[16/10]" : "aspect-[16/10]")}>
        {project.image || project.video ? (
          <>
            {project.image && (
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className={cn(
                  "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.02]",
                  project.fit === "contain" ? "object-contain p-3" : "object-cover object-top",
                )}
              />
            )}
            {project.video && (
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                preload="none"
                playsInline
                loop
                className={cn(
                  "absolute inset-0 h-full w-full bg-foreground object-contain transition-opacity duration-300",
                  playing ? "opacity-100" : "opacity-0",
                )}
              />
            )}
          </>
        ) : (
          <Poster title={project.title} stat={project.posterStat} tags={project.technologies} />
        )}

        {project.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-background">
            {project.badge}
          </span>
        )}

        {project.video && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const v = videoRef.current;
              if (sound.on && !sound.ready) {
                // First click on the page: this click itself unlocks audio.
                if (v) v.muted = false;
                return;
              }
              sound.toggle();
              if (v) v.muted = sound.on; // sound.on is the pre-toggle value
            }}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground backdrop-blur transition-opacity"
            aria-label={sound.on ? "Mute previews" : "Unmute previews"}
          >
            {playing ? (
              sound.on && sound.ready ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3" />
            )}
            {playing ? (sound.on && sound.ready ? "Sound on" : sound.on ? "Click for sound" : "Muted") : "Hover to play"}
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className={cn("font-display leading-tight", large ? "text-3xl" : "text-2xl")}>{project.title}</h3>
          <div className="flex shrink-0 items-center gap-1.5 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border p-1.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border p-1.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                aria-label={project.liveLabel || "Open link"}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, large ? 5 : 4).map((t) => (
            <span key={t} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
