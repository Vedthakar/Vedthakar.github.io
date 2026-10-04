import { cn } from "@/lib/utils";

/** Typographic stand-in for projects without a screenshot or video yet. */
export default function Poster({
  title,
  stat,
  tags,
  className,
}: {
  title: string;
  stat?: string;
  tags: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden bg-foreground p-5 text-background",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span />
      <div className="relative">
        <p className={cn("font-display leading-none", title.length > 18 ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl")}>{title}</p>
        <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] opacity-70">
          {[stat, ...tags.slice(0, 2)].filter(Boolean).join(" · ")}
        </p>
      </div>
    </div>
  );
}
