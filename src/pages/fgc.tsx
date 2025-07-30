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

                        <p dangerouslySetInnerHTML={{__html: translate({id:"home.who-are-we.content", message:"𝐹𝐼𝑅𝑆𝑇 Slovenia is a group of high school students and mentors who like to build robots and with their help confront jucy challanges. <em>We</em> represent the country of Slovenia in international robotics competitions and we need all the help we can get."})}}></p>

                        <h1 dangerouslySetInnerHTML={{__html: translate({id: "home.what-is-first.title", message: "What is 𝐹𝐼𝑅𝑆𝑇?"})}}></h1>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-is-first.content", message: "𝐹𝐼𝑅𝑆𝑇 is the organisation behind competitions, where hundreds of thousands of high school students all around the world build on their passion in science, technology, engineering and mathematics (STEM). The competitions bring together leading STEM experts of the future and encourage the participants to help solve any and every global problem. With this the participants gain experience in different STEM fields."})}}></p>

                        <h1>{translate({id: "home.what-we-do.title", message: "What do we do?"})} </h1>
                        <h2>𝐹𝐼𝑅𝑆𝑇 Global Challenge</h2>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.fgc", message: `
                        Annual international competition 𝐹𝐼𝑅𝑆𝑇 Global Challenge, which inspires nearly two thousand high school students and mentors (yearly!) to develop a passion for STEM, is a charitable robotics competition with the goal of networking and connecting students from different backgrounds, languages, religions and customs to work together towards a common goal.
                        Each countries representative team builds a robot over the summer on a specific theme and then competes in the fall against other teams.
                        For more information, you can visit the official <a href="https://first.global">𝐹𝐼𝑅𝑆𝑇 Global Challenge</a> website.
                        <br />
                        Among other things, 𝐹𝐼𝑅𝑆𝑇 Global:
                        <ul>
                            <li>motivates high school students and mentors (college students) to learn the necessary skills to discover something new, so they can have a positive impact on the world!</li>
                            <li>aims to convince governments and organizations around the world to support STEM education.</li>
                        </ul>
                        `})}}></p>

                        <h3 dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.fgc.video.current", message: "Theme for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>"})}}></h3>
                        <center>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/C81IOjfVa3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </center>

                        <h2>𝐹𝐼𝑅𝑆𝑇 Tech Challenge</h2>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.ftc", message: "Series of regional qualifiers and world championship, 𝐹𝐼𝑅𝑆𝑇 Tech Challenge, which inspires almost 100 thousand students annually, is a competition with the goal of further educating high school students in the fields of STEM. The challenges are harder than in FGC, but consequently also more fun and educational.<br />You can read more on our website <a href=\"https://firsttech.si\">𝐹𝐼𝑅𝑆𝑇 Tech Challenge Slovenia</a> and on the <a href=\"https://firstinspires.org\">𝐹𝐼𝑅𝑆𝑇 Inspires</a> website."})}}></p>

                        <h1>{translate({id: "home.donations.title", message: "Donations and sponsorships"})}</h1>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.donations.content", message: "Application fees and travel expenses for the team are quite substantial, so we’re looking to raise money from donors and sposnors. If you’d like to help us out, please reach out to the following email <a href=\"mailto:info@firstglobal.si\">info@firstglobal.si</a>. It’d really help us out! To see who our current sponsors and donors are visit the page with the list of our supporters."})}}></p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
