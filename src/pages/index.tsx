import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
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
                        <div className="row">
                            <h1>Who are we?</h1>
                            <p>
                                <i>FIRST</i> Slovenia is a group of students that represents the country of Slovenia in
                                international competitions, loves finding interesting challenges, making robots and
                                using them to solve these same challenges.
                            </p>
                        </div>
                        <div className="row">
                            <h1>What is <i>FIRST</i>?</h1>
                            <p>
                                <i>FIRST</i> is the organisation behind competitions, where hundreds of thousands of students
                                all around the world build on their passion in science, technology, engineering and
                                mathematics (STEM). The competitions bring together leading STEM experts of the future
                                and encourage the participants to help solve any and every global problem. With this the
                                participants gain experience in different STEM fields.
                            </p>
                        </div>
                        <div className="row">
                            <h1>What do we do?</h1>
                            <p>
                                <h2><i>FIRST</i> Global Challenge</h2>
                                Also known by its acronym FGC, this competition involves a single team from (almost)
                                every country in the world. The challenges are focused on coming up with solutions to a
                                specific global problem of today and the future. You can read more about this
                                competition our FGC website.
                            </p>
                            <p>
                                <h2><i>FIRST</i> Tech Challenge</h2>
                                Also known under the acronym FTC, this competition’s challenges are focused on more
                                difficult problems, requiring a bit more experience than FGC. You can read more about
                                this competition here.
                            </p>
                        </div>

                        <div className="row">
                            <h1>Donations and sponsorships</h1>
                            <p>
                                Application fees and travel expenses for the team are quite substantial, so we’re
                                looking to raise money from donors and sposnors. If you’d like to help us out, please
                                reach out to the following email <a href="mailto:info@firstglobal.si">
                                info@firstglobal.si</a>. It’d really help us out! To see who our current sponsors and
                                donors are visit the page with the list of our supporters.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
