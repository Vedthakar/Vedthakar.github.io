import { useEffect, useRef, useState } from "react";
import { stats, statsAsOf, type Stat } from "@/data/site";

/** Splits "$750K" into prefix "$", number 750, suffix "K" so it can count up. */
function parse(value: string) {
  const m = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], target: Number(m[2].replace(/,/g, "")), suffix: m[3], grouped: m[2].includes(",") };
}

function CountUp({ value, run }: { value: string; run: boolean }) {
  const parsed = parse(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!parsed || !run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(parsed.target);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(parsed.target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, value]);

  if (!parsed) return <>{value}</>;
  const shown = run ? n : 0;
  return (
    <>
      {parsed.prefix}
      {parsed.grouped ? shown.toLocaleString("en-US") : shown}
      {parsed.suffix}
    </>
  );
}

function StatCell({ stat, run }: { stat: Stat; run: boolean }) {
  const external = stat.href?.startsWith("http");
  return (
    <a
      href={stat.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex flex-col justify-between gap-6 bg-card p-5 transition-colors hover:bg-background sm:p-6"
    >
      <span className="whitespace-nowrap font-display text-[2.4rem] leading-none tabular-nums sm:text-5xl lg:text-[3.25rem]">
        <CountUp value={stat.value} run={run} />
      </span>
      <span>
        <span className="block text-sm font-medium">{stat.label}</span>
        <span className="mt-1 block font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground">{stat.note}</span>
      </span>
    </a>
  );
}

export default function StatsBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-20">
      <div className="mb-4 flex items-end justify-between gap-4">
        <p className="eyebrow flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
          </span>
          Current stats
        </p>
        <p className="eyebrow">As of {statsAsOf}</p>
      </div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border lg:grid-cols-4">
        {stats.map((s) => (
          <StatCell key={s.label} stat={s} run={run} />
        ))}
      </div>
    </div>
  );
}
