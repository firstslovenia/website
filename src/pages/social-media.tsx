import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";

import styles from "./social-media.module.css";
import indexSyles from "./index.module.css";

export default function Contact(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="𝐹𝐼𝑅𝑆𝑇 Slovenia Social media profiles"
    >
      <main>
        <div className={`container ${indexSyles.mainContainer}`}>
          <h1>
            {translate({ id: "social-media.title", message: "Social media" })}
          </h1>
          <h1 className={styles.centeredTitle}>Instagram</h1>
          <div className={styles.socialMediaGrid}>
            <div className={styles.socialMediaItem}>
              <h2>
                <em>𝐹𝐼𝑅𝑆𝑇</em> Slovenia
              </h2>
              <a href="https://www.instagram.com/first.slovenia">
                <img src="img/IGlogo.png" className={styles.logo} />
              </a>
            </div>
            <div className={styles.socialMediaItem}>
              <h2>22903 VegaMind</h2>
              <a href="https://www.instagram.com/vegamind.22903">
                <img src="img/IGlogo.png" className={styles.logo} />
              </a>
            </div>
            <div className={styles.socialMediaItem}>
              <h2>28080 VegaTech</h2>
              <a href="https://www.instagram.com/vegatech.28080">
                <img src="img/IGlogo.png" className={styles.logo} />
              </a>
            </div>
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.socialMediaGrid}>
            <div className={styles.socialMediaItem}>
              <h2>YouTube</h2>
              <a href="https://www.youtube.com/@FIRSTSlovenia">
                <img src="img/YTlogo.png" className={styles.logo} />
              </a>
            </div>
            <div className={styles.socialMediaItem}>
              <h2>TikTok</h2>
              <a href="https://www.tiktok.com/@first.slovenia">
                <img
                  src="img/forbidenChineselogo.png"
                  className={styles.logo}
                />
              </a>
            </div>
            <div className={styles.socialMediaItem}>
              <h2>Discord</h2>
              <a href="https://discord.gg/MRuywyFjTQ">
                <img src="img/DSlogo.png" className={styles.logo} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
