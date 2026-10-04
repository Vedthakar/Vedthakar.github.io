import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { journey, type Stop } from "@/data/site";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import SectionHeader from "./SectionHeader";

function StopCard({ stop, open, onToggle }: { stop: Stop; open: boolean; onToggle: () => void }) {
  return (
    <div id={`journey-${stop.id}`} className="card-lift rounded-2xl border bg-card">
      <button type="button" onClick={onToggle} aria-expanded={open} className="w-full p-5 text-left sm:p-6">
        <div className="flex items-start gap-4">
          <Logo src={stop.logo} name={stop.org} className="h-14 w-14" />
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-3xl leading-none">{stop.org}</h3>
            <p className="mt-2 text-[15px]">{stop.role}</p>
            {stop.note && <p className="mt-1 text-sm text-muted-foreground">{stop.note}</p>}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-dashed pt-4">
          <span className="text-sm text-muted-foreground">{stop.where}</span>
          <span className="flex items-center gap-2">
            <span className="whitespace-nowrap rounded-full bg-foreground px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-background">
              {stop.when}
            </span>
            <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
          </span>
        </div>
      </button>
      <div className={cn("grid transition-[grid-template-rows] duration-500 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <ul className="space-y-3 px-5 pb-6 sm:px-6">
            {stop.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <Star className="mt-1 h-3 w-3 shrink-0 fill-foreground" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Node({ n }: { n: number | string }) {
  return (
    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-background font-mono text-xs">
      {n}
    </span>
  );
}

export default function Journey() {
  const [openId, setOpenId] = useState<string | null>(journey[0]?.id ?? null);
  const total = journey.length;

  return (
    <section id="journey" className="border-y bg-card/60">
      <div className="container py-20 sm:py-28">
        <SectionHeader index="03" kicker="Journey" title="A few stops along the way" aside="Click a stop to see what I did there." />

        <div className="relative">
          {/* the dashed spine */}
          <div
            aria-hidden
            className="absolute bottom-0 left-5 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 50%, transparent 0)", backgroundSize: "1px 10px" }}
          />

          {/* next stop marker */}
          <div className="relative mb-12 grid grid-cols-[2.5rem_1fr] items-center gap-5 md:grid-cols-[1fr_2.5rem_1fr] md:gap-8">
            <div className="hidden md:block" />
            <Node n={total + 1} />
            <p className="font-display text-3xl italic">
              next stop <span className="text-muted-foreground">— coming soon</span>
            </p>
          </div>

          <ol className="space-y-12 md:space-y-16">
            {journey.map((stop, i) => {
              const left = i % 2 === 0;
              const n = total - i;
              const label = <p className="font-display text-2xl italic text-muted-foreground md:text-3xl">{stop.when}</p>;
              const card = (
                <StopCard stop={stop} open={openId === stop.id} onToggle={() => setOpenId(openId === stop.id ? null : stop.id)} />
              );
              return (
                <li key={stop.id} className="relative grid grid-cols-[2.5rem_1fr] items-center gap-5 md:grid-cols-[1fr_2.5rem_1fr] md:gap-8">
                  <div className="col-start-1 row-start-1 self-start pt-6 md:col-start-2 md:self-center md:pt-0">
                    <Node n={n} />
                  </div>
                  <div className={cn("col-start-2 row-start-1", left ? "md:col-start-1" : "md:col-start-3")}>{card}</div>
                  <div className={cn("hidden row-start-1 md:block", left ? "md:col-start-3" : "md:col-start-1 md:text-right")}>
                    {label}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
