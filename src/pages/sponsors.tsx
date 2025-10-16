import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import SponsorsGrid from "@site/src/components/SponsorsGrid";

// import styles from "./sponsors.module.css";
import indexStyles from "./index.module.css";

const sponsorsTop = [
  { href: "https://404.si",            src: "img/sponsors/404.png",     alt: "Zavod 404" },
  { href: "http://ljubljana.si",       src: "img/sponsors/mol.png",      alt: "Mestna občina Ljubljana" },
  { href: "https://www.vegova.si",     src: "img/sponsors/vegova.png",   alt: "Vegova Ljubljana" },
];

const sponsorsMid = [
  { href: "https://eles.si",           src: "img/sponsors/eles.png",     alt: "Eles" },
  { href: "https://www.1home.io/",     src: "img/sponsors/1Home.png",    alt: "1Home" },
  { href: "https://nrg.si",            src: "img/sponsors/nrg.png",      alt: "NRG" },
];

const sponsorsBottom = [
  { href: "https://foculus.si",        src: "img/sponsors/foculus.png",  alt: "Pizzerija Foculus" },
  { href: "https://triglav.si",        src: "img/sponsors/triglav.png",  alt: "Zavarovalnica Triglav" },
];

export default function Sponsors(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="𝐹𝐼𝑅𝑆𝑇 Slovenia supporters">
      <main>
      <div className={`container`}>
        <h1>Sponsors</h1>

        <SponsorsGrid items={sponsorsTop} />
        <hr />
        <SponsorsGrid items={sponsorsMid} />
        <hr />
        <SponsorsGrid items={sponsorsBottom} />
      </div>
    </main>
    </Layout>
  );
}
 