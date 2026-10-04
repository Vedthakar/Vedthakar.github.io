import { useState } from "react";
import { ArrowUpRight, GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";
import { openSource, type OpenSource } from "@/data/site";
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
        <div className="mt-auto flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em]">
          {repo.merged > 0 && <span className="rounded-full bg-foreground px-2.5 py-1 text-background">{repo.merged} merged</span>}
          {repo.open > 0 && <span className="rounded-full border px-2.5 py-1">{repo.open} in review</span>}
          <span className="ml-auto text-muted-foreground">{open ? "Hide" : `${repo.prs.length} PR${repo.prs.length > 1 ? "s" : ""}`}</span>
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{pr.status}</span>
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
  const merged = openSource.reduce((n, r) => n + r.merged, 0);
  return (
    <section id="open-source" className="container py-20 sm:py-28">
      <SectionHeader
        index="02"
        kicker="Open source"
        title="Contributions"
        aside={`${merged} pull requests merged across ${openSource.filter((r) => r.merged).length} upstream projects, including AWS Cedar and Meta's Lexical. Click a repo to see each PR.`}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {openSource.map((r) => (
          <RepoCard key={r.repo} repo={r} />
        ))}
      </div>
    </section>
  );
}
