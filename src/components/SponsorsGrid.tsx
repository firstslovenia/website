import React from "react";
import styles from "./SponsorsGrid.module.css";

type Sponsor = {
  href: string;
  src: string;
  alt: string;
};

type SponsorsGridProps = {
  items: Sponsor[];
  className?: string;
  // Optional: tweak sizes without touching CSS
  logoHeightPx?: number; // default 80 on mobile, 110 on desktop via CSS; this overrides both
};

const SponsorsGrid: React.FC<SponsorsGridProps> = ({ items, className, logoHeightPx }) => {
  // Allow runtime override for logo height using a CSS custom property
  const styleVar = logoHeightPx
    ? ({ ["--logo-height" as any]: `${logoHeightPx}px` } as React.CSSProperties)
    : undefined;

  return (
    <ul className={`${styles.grid} ${className ?? ""}`} style={styleVar}>
      {items.map(({ href, src, alt }, i) => (
        <li key={`${href}-${i}`} className={styles.cell}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            className={styles.link}
          >
            <div className={styles.logoBox}>
              <img className={styles.logoImg} src={src} alt={alt} loading="lazy" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SponsorsGrid;
