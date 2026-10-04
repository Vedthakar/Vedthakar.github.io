import data from "./projects.json";

export type Project = {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  featured?: boolean;
  posterStat?: string;
  bullets?: string[];
  details?: string;
  technologies: string[];
  video?: string;
  image?: string;
  fit?: "cover" | "contain";
  github?: string;
  url?: string;
  live?: string;
  liveLabel?: string;
  createdAt?: string;
  category?: string;
};

export type ArchiveItem = {
  title: string;
  description: string;
  video?: string;
  image?: string;
  github?: string;
  technologies: string[];
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// The n8n sync appends entries with the older shape (no slug or bullets,
// "url" instead of "github", "/images/default.jpg" placeholders). Normalise
// here so auto-added projects still render cleanly.
export const projects: Project[] = (data.projects as Project[]).map((p) => ({
  ...p,
  slug: p.slug || slugify(p.title),
  github: p.github || p.url || "",
  image: p.image && !p.image.startsWith("/images/") ? p.image : "",
  bullets: p.bullets?.length ? p.bullets : p.details ? [p.details] : [],
}));

export const archive: ArchiveItem[] = (data as { archive?: ArchiveItem[] }).archive ?? [];
