import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          𝐹𝐼𝑅𝑆𝑇 Global Challenge
        </Heading>
        <p className="hero__subtitle">
          {translate({
            id: "fgc.tagline",
            message: "Representing chicken shaped country on the global stage",
          })}
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="For Inspiration and Recognition of Science and Technology Slovenia"
    >
      <HomepageHeader />
      <main>
        <section>
          <div className="container" style={{ paddingTop: "20px" }}>
            <p
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: "fgc.what-we-do",
                  message: `
                        Annual international competition 𝐹𝐼𝑅𝑆𝑇 Global Challenge, which inspires nearly two thousand high school students and mentors (yearly!) to develop a passion for STEM, is a charitable robotics competition with the goal of networking and connecting students from different backgrounds, languages, religions and customs to work together towards a common goal.
                        Each countries representative team builds a robot over the summer on a specific theme and then competes in the fall against other teams.
                        For more information, you can visit the official <a href="https://first.global">𝐹𝐼𝑅𝑆𝑇 Global Challenge</a> website.
                        <br />
                        Among other things, 𝐹𝐼𝑅𝑆𝑇 Global:
                        <ul>
                            <li>motivates high school students and mentors (college students) to learn the necessary skills to discover something new, so they can have a positive impact on the world!</li>
                            <li>aims to convince governments and organizations around the world to support STEM education.</li>
                        </ul>
                        `,
                }),
              }}
            ></p>

            <h3
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: "home.what-we-do.video.chall",
                  message:
                    "Theme for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>",
                }),
              }}
            ></h3>
            <center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C81IOjfVa3I"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </center>
            <br />
            <h3
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: "home.what-we-do.video.robot",
                  message:
                    "Robot game for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>",
                }),
              }}
            ></h3>
            <center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ssNS1lYT1Fs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </center>
          </div>
        </section>
      </main>
    </Layout>
  );
}
