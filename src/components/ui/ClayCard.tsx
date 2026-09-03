import React from "react";
import useTilt from "../../hooks/useTilt";

export type Accent = "violet" | "pink" | "mint" | "amber" | "sky";

type Props = {
  children: React.ReactNode;
  /** Classes for the visible clay slab. */
  className?: string;
  /** Classes for the perspective wrapper — put layout/grid classes here. */
  stageClassName?: string;
  accent?: Accent;
  /** Fill the slab with the accent colour instead of white. */
  tinted?: boolean;
  /** Max tilt in degrees; 0 disables pointer tracking. */
  tilt?: number;
  /** Entrance animation delay in ms. */
  delay?: number;
  reveal?: boolean;
};

const ClayCard = ({
  children,
  className = "",
  stageClassName = "",
  accent = "violet",
  tinted = false,
  tilt = 6,
  delay = 0,
  reveal = true,
}: Props) => {
  const ref = useTilt<HTMLDivElement>({ max: tilt });

  return (
    <div
      className={`clay-stage ${stageClassName}`}
      {...(reveal ? { "data-reveal": "" } : {})}
      style={
        delay ? ({ "--delay": `${delay}ms` } as React.CSSProperties) : undefined
      }
    >
      <div
        ref={tilt > 0 ? ref : undefined}
        className={`clay-card accent-${accent} ${
          tinted ? "is-tinted" : ""
        } ${className}`}
      >
        <span className="clay-card__glare" aria-hidden="true" />
        <div className="clay-card__body">{children}</div>
      </div>
    </div>
  );
};

export default ClayCard;
