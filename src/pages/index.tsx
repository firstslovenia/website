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

                        <h1>{translate({id: "home.what-we-do.title", message: "What are we currently working on?"})} </h1>
                        <h2>𝐹𝐼𝑅𝑆𝑇 Global Challenge</h2>
                        <p dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do", message: `
                        At the moment we are preparing for our (and overall) <strong>ninth</strong> FIRST Global Challenge. This year's challenge is themed <strong><em>Eco Equilibrium</em></strong> and will be held in <strong><em>Panama City, Panama</em></strong> from 29th October to 1st November.
                        With the focus on biodiversity, our team will be working on a solution to help protect the environment and promote sustainable practices. We are excited to showcase our skills and creativity in this year's challenge, and we hope to make a positive impact on the world through our participation.
                        <br />
                        You can read more about the challenge on the <a href="https://first.global">𝐹𝐼𝑅𝑆𝑇 Global</a> website or watch the videos:
                        `})}}></p>

                        <h3 dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.video.chall", message: "Theme for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>"})}}></h3>
                        <center>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/C81IOjfVa3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </center>
                        <br />
                        <h3 dangerouslySetInnerHTML={{__html: translate({id: "home.what-we-do.video.robot", message: "Robot game for this year's challenge, held in <em>Panama City from 29th October to 1st November</em>"})}}></h3>
                        <center>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ssNS1lYT1Fs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </center>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
