import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    𝐹𝐼𝑅𝑆𝑇 Tech Challenge
                </Heading>
                <p className="hero__subtitle">{translate({id: 'ftc.tagline', message: "🐤 chirping from the boot"})}</p>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="For Inspiration and Recognition of Science and Technology Slovenia">
            <HomepageHeader/>
            <main>
                <section>
                    <div className="container" style={{paddingTop: "20px"}}>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "ftc.what-we-do", message: 
                            `Series of regional qualifiers and world championship, 𝐹𝐼𝑅𝑆𝑇 Tech Challenge,
                            which inspires almost 100 thousand students annually, is a competition with
                            the goal of further educating high school students in the fields of STEM.
                            The challenges are harder than in FGC, but consequently also more fun and
                            educational.<br />You can read more on the <a href=\"https://firstinspires.org\">𝐹𝐼𝑅𝑆𝑇 Inspires</a> 
                            website and watch season announcement video.`})}}></p>
                        
                        <h3 dangerouslySetInnerHTML={{__html: translate({id: "ftc.what-we-do.video", message: "2025-2026 Season reveal"})}}></h3>
                        <center>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/XLp3fYreLLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </center>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
