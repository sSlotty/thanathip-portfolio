import React from "react";
import type { Accent } from "./ClayCard";

type Props = {
  /** Rendered in solid ink. */
  lead?: string;
  /** Rendered as the extruded clay word. */
  highlight: string;
  subtitle?: string;
  /** Pill label above the title, e.g. "02 / EXPERIENCE". */
  index?: string;
  accent?: Accent;
};

const SectionHeading = ({
  lead,
  highlight,
  subtitle,
  index,
  accent = "violet",
}: Props) => (
  <header className={`section-heading accent-${accent}`} data-reveal>
    {index && <p className="section-heading__index">{index}</p>}
    <h2 className="section-heading__title">
      {lead && <span>{lead} </span>}
      <span className="text-pop" data-text={highlight}>
        {highlight}
      </span>
    </h2>
    {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
  </header>
);

export default SectionHeading;
