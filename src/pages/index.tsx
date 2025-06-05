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
                    {translate({id: 'home.title', message: siteConfig.title})}
                </Heading>
                <p className="hero__subtitle">{translate({id: 'home.tagline', message: siteConfig.tagline})}</p>
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
                        <h1>{translate({id:"home.who-are-we.title", message:"Who are we?"})}</h1>
                        <p>{translate({id:"home.who-are-we.content", message:"𝐹𝐼𝑅𝑆𝑇 Slovenia is a group of students that represents the country of Slovenia in international competitions, loves finding interesting challenges, making robots and using them to solve these same challenges."})}</p>

                        <h1 dangerouslySetInnerHTML={{__html: translate({id: "home.what-is-first.title", message: "What is 𝐹𝐼𝑅𝑆𝑇?"})}}></h1>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-is-first.content", message: "𝐹𝐼𝑅𝑆𝑇 is the organisation behind competitions, where hundreds of thousands of students all around the world build on their passion in science, technology, engineering and mathematics (STEM). The competitions bring together leading STEM experts of the future and encourage the participants to help solve any and every global problem. With this the participants gain experience in different STEM fields."})}}></p>

                        <h1>{translate({id: "home.what-we-do.title", message: "What do we do?"})} </h1>
                        <h2>𝐹𝐼𝑅𝑆𝑇 Global Challenge</h2>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.fgc", message: "Also known by its acronym FGC, this competition involves a single team from (almost) every country in the world. The challenges are focused on coming up with solutions to a specific global problem of today and the future. You can read more about this competition our FGC website."})}}></p>

                        <h2>𝐹𝐼𝑅𝑆𝑇 Tech Challenge</h2>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.ftc", message: "Also known under the acronym FTC, this competition’s challenges are focused on more difficult problems, requiring a bit more experience than FGC. You can read more about this competition here."})}}></p>

                        <h1>{translate({id: "home.donations.title", message: "Donations and sponsorships"})}</h1>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.donations.content", message: "Application fees and travel expenses for the team are quite substantial, so we’re looking to raise money from donors and sposnors. If you’d like to help us out, please reach out to the following email <a href=\"mailto:info@firstglobal.si\">info@firstglobal.si</a>. It’d really help us out! To see who our current sponsors and donors are visit the page with the list of our supporters."})}}></p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
