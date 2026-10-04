import { stats, statsAsOf, type Stat } from "@/data/site";

function Item({ stat }: { stat: Stat }) {
  const external = stat.href?.startsWith("http");
  return (
    <a
      href={stat.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      title={stat.note}
      className="group flex shrink-0 items-baseline gap-3 px-7 opacity-90 transition-opacity hover:opacity-100"
    >
      <span className="whitespace-nowrap font-display text-4xl leading-none tabular-nums sm:text-5xl">{stat.value}</span>
      <span className="whitespace-nowrap text-sm text-background/70 transition-colors group-hover:text-background">{stat.label}</span>
      <span aria-hidden className="pl-4 text-background/30">✦</span>
    </a>
  );
}

/** Full-width band of stats that drifts slowly sideways; pauses on hover. */
export default function StatsTicker() {
  return (
    <section aria-label="Current stats" className="border-y bg-foreground text-background">
      <div className="container flex items-center justify-between pt-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-background/50">
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-background" />
          </span>
          Current stats
        </span>
        <span>As of {statsAsOf}</span>
      </div>

      <div className="ticker group/ticker relative overflow-hidden py-5 sm:py-6">
        <div className="ticker-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {stats.map((s) => (
                <Item key={`${copy}-${s.label}`} stat={s} />
              ))}
            </div>
          ))}
        </div>
        {/* soft fade at both edges */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-foreground to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-foreground to-transparent" />
      </div>
    </section>
  );
}
