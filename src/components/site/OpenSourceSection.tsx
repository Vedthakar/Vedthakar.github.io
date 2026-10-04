import { useState } from "react";
import { ArrowUpRight, GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";
import { gssoc, openSource, type OpenSource } from "@/data/site";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import SectionHeader from "./SectionHeader";

const statusIcon = {
  merged: GitMerge,
  open: GitPullRequest,
  closed: GitPullRequestClosed,
} as const;

function RepoCard({ repo }: { repo: OpenSource }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card-lift flex flex-col rounded-2xl border bg-card">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="flex flex-1 flex-col gap-4 p-5 text-left">
        <div className="flex items-center gap-3">
          <Logo src={`https://github.com/${repo.owner}.png?size=96`} name={repo.name} className="h-11 w-11" />
          <div className="min-w-0">
            <h3 className="font-display text-2xl leading-none">{repo.name}</h3>
            <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground">{repo.repo}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{repo.blurb}</p>
        <div className="mt-auto flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground">
          <span>Contributor</span>
          <span>{open ? "Hide" : "See contributions"}</span>
        </div>
      </button>
      <div className={cn("grid transition-[grid-template-rows] duration-500 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <ul className="overflow-hidden">
          {repo.prs.map((pr) => {
            const Icon = statusIcon[pr.status];
            return (
              <li key={pr.url} className="border-t">
                <a href={pr.url} target="_blank" rel="noreferrer" className="group flex items-start gap-3 px-5 py-3 text-sm hover:bg-background">
                  <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", pr.status === "closed" && "text-muted-foreground")} />
                  <span className="flex-1 leading-snug">{pr.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{pr.status === "open" ? "in review" : pr.status}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="container py-20 sm:py-28">
      <SectionHeader
        index="02"
        kicker="Open source"
        title="Contributions"
        aside="Fixes, features and tests shipped upstream, including AWS's Cedar and Meta's Lexical. Click a repo to see each pull request."
      />

      <div className="mb-5 flex flex-col gap-6 overflow-hidden rounded-2xl border bg-foreground p-6 text-background sm:flex-row sm:items-center sm:p-8">
        <img src={gssoc.badge} alt="GSSoC 2026 badge" className="h-28 w-28 shrink-0 object-contain" loading="lazy" />
        <div className="flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">{gssoc.program}</p>
          <p className="mt-2 font-display text-4xl leading-none sm:text-5xl">Top 3% worldwide</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-75">{gssoc.detail}</p>
        </div>
        <div className="flex shrink-0 gap-6 sm:flex-col sm:gap-3 sm:text-right">
          <div>
            <p className="font-display text-4xl leading-none">#{gssoc.rank}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">of {gssoc.of}</p>
          </div>
          <div>
            <p className="font-display text-2xl leading-none">Mentor</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">GSSoC 2026</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {openSource.map((r) => (
          <RepoCard key={r.repo} repo={r} />
        ))}
      </div>
    </section>
  );
}
