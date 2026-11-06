import { Fragment, type ReactNode } from "react";

/** Renders `**text**` in data strings as bold, so headline numbers stand out. */
export function rich(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** Strips `**` markers for places that need plain text (meta tags, aria labels). */
export const plain = (text: string) => text.replace(/\*\*/g, "");
