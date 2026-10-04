export default function SectionHeader({
  index,
  title,
  kicker,
  aside,
}: {
  index: string;
  title: string;
  kicker?: string;
  aside?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-b pb-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow mb-3">
          {index} — {kicker}
        </p>
        <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl">{title}</h2>
      </div>
      {aside && <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">{aside}</p>}
    </div>
  );
}
