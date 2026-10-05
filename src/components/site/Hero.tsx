import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="container pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="reveal max-w-4xl">
        <p className="eyebrow mb-6 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          {profile.location} · CS &amp; Economics, University of Toronto
        </p>
        <h1 className="font-display text-[3.4rem] leading-[0.95] sm:text-8xl">
          I build AI products
          <br />
          <span className="italic text-muted-foreground">that ship, sell</span> and stick.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            See the work <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border p-2.5 transition-colors hover:border-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border p-2.5 transition-colors hover:border-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((w, i) => {
          const external = w.href?.startsWith("http");
          return (
            <a
              key={w.label}
              href={w.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="reveal group flex flex-col gap-2 bg-card p-6 transition-colors hover:bg-background"
              style={{ animationDelay: `${120 + i * 60}ms` }}
            >
              <span className="font-display text-5xl leading-none">{w.value}</span>
              <span className="text-sm font-medium">{w.label}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">{w.detail}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
