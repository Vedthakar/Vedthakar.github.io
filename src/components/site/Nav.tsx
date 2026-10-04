import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { profile } from "@/data/site";
import { useSound } from "@/lib/sound";
import { cn } from "@/lib/utils";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#open-source", label: "Open source" },
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const sound = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-2xl leading-none">
          Ved Thakar
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={sound.toggle}
            className="hidden items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
            aria-label={sound.on ? "Turn preview sound off" : "Turn preview sound on"}
          >
            {sound.on ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
            {sound.on ? "Sound on" : "Sound off"}
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-4 py-1.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
