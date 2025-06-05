import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {translate({ id: "mentor.title", message: "New mentor information" })}
                </Heading>
                <p className="hero__subtitle">{translate({ id: "mentor.subtitle", message: "Building the future - together" })}</p>
            </div>
        </header>
    );
}
export default function Sponsors(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="FIRST Slovenia mentor information">
            <HomepageHeader />
            <main>
                <div className="container" style={{ paddingTop: '20px' }}>
                    <div>
                        <h1>{translate({ id: "mentor.needed-hardware.title", message: 'What do we need?' })}</h1>
                        <p>
                            {translate({
                                id: "mentor.needed-hardware.content",
                                message:
                                    'As opposed to FLL, FIRST Tech Challenge teams have more freedom of choice. Limits on hardware are mostly for electronics (Control Hub, Driver Hub, speciffic motors and batteries only).',
                            })}
                        </p>
                    </div>

                    <div>
                        <h1>{translate({ id: "mentor.more-info.title", message: 'Where can we get more information?' })}</h1>
                        <p>
                            {translate({ id: "mentor.more-info.rules", message: 'Game manual (including rules) are available on ' })}
                            <a href="https://ftc-resources.firstinspires.org/file/ftc/game/manual">
                                {translate({ id: "this-link", message: 'this link' })}
                            </a>
                            {translate({ id: "mentor.more-info.registration", message: ', information on team registration are available on ' })}
                            <a href="https://www.firstinspires.org/sites/default/files/uploads/resource_library/ftc/international-team-registration.pdf">
                                {translate({ id: "this-link", message: 'this link' })}
                            </a>
                            {translate({
                                id: "mentor.more-info.other-content",
                                message:
                                    ' (registration of teams outside North America is free). In the near future we we\'ll also hold a presentation for mentors, where we\'ll provide information including how we would like to help future teams in Slovenia (technical mentorship). For more information contact us at ',
                            })}
                            <a href="mailto:info@firstglobal.si">info@firstglobal.si</a>.
                        </p>
                    </div>

                    <div>
                        <h1>{translate({ id: "mentor.cost.title", message: 'What are costs associated with starting a team?' })}</h1>
                        <p>
                            {translate({ id: "mentor.cost.calculator", message: 'Our costs calculator is available at' })}
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <a href="files/stroskiFTC.xlsx">
                                <img src="img/GS.png" style={{ height: '20vw', maxHeight: '150px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
