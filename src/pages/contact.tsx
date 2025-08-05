import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import MapView from "@site/src/components/MapView";

import styles from "./contact.module.css";

export default function Contact(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="About us">
      <main>
        <div className={`container ${styles.contact}`}>
          <h1>{translate({ id: "contact.title", message: "Contact us" })}</h1>
          <p className={styles.contactText}>
            <b>𝐹𝐼𝑅𝑆𝑇 Slovenia</b>
            <br />
            Zavod 404
            <br />
            Mencingerjeva ulica 7, <br />
            1000 Ljubljana
          </p>
          <p className={styles.mail}>
            <b>Email:</b>
            <br />
            <a href="mailto:info@firstglobal.si">info@firstglobal.si</a>
          </p>
        </div>

        <MapView
          center={[46.04179827172938, 14.495698281752176]}
          zoom={16}
          markers={[
            [46.04179827172938, 14.495698281752176, "Zavod 404"], // Marker for Zavod 404
          ]}
        />
      </main>
    </Layout>
  );
}
