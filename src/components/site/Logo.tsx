import { useState } from "react";
import { cn } from "@/lib/utils";

/** Logo image with a monogram fallback if it's missing or fails to load. */
export default function Logo({ src, name, className }: { src?: string; name: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background",
        className,
      )}
    >
      {src && !failed ? (
        <img src={src} alt={`${name} logo`} className="h-full w-full object-contain p-1.5" onError={() => setFailed(true)} loading="lazy" />
      ) : (
        <span className="font-display text-xl text-foreground">{initials}</span>
      )}
    </div>
  );
}
