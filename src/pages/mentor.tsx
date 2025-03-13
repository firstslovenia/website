import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Informacije za mentorje
                </Heading>
                <p className="hero__subtitle">Skupaj gradimo prihodnost</p>
            </div>
        </header>
    );
}
export default function Sponsors(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="FIRST Slovenia supporters">
            <HomepageHeader />
            <main>
                <div className="container" style={{ paddingTop: "20px"}}>
                    <div>
                        <h1>Kaj potrebujemo?</h1>
                        <p>
                            Za razliko od FLL je pri <em>FIRST</em> Tech Challenge-u izbira
                            komponent načeloma prepuščena ekipi. Omejene so le kontrolna enota
                            (Control Hub), motorji, baterija in voznikova konzola (Driver Hub).
                        </p>
                    </div>
                    <div>
                        <h1>Kje prejmemo več informacij?</h1>
                        <p>
                            Pravila tekmovanja so dostopna na <a href="https://ftc-resources.firstinspires.org/file/ftc/game/manual">tej povezavi</a>,
                            informacije o registraciji ekipe so dostopne na <a href="https://www.firstinspires.org/sites/default/files/uploads/resource_library/ftc/international-team-registration.pdf">tej povezavi</a> (registracija za ekipe izven Severne Amerike je brezplačna)
                            V bližnji prihodnosti bomo izvedli tudi predstavitev za mentorje,
                            kjer bomo med drugim predstavili način sodelovanja (tehničnega
                            mentorstva) z drugimi ekipami. Za več informacij (na splošno
                            in v zvezi s predstavitvijo) se obrnite na <a href="mailto:info@firstglobal.si">info@firstglobal.si</a>.
                        </p>
                    </div>
                    <div>
                        <h1>Kakšni so vstopni stroški?</h1>
                        <p>
                            Mentorji <em>FIRST</em> Slovenia smo pripravili kalkulator stroškov
                        </p>
                        <div style={{textAlign: "center"}}>
                            <a href="files/stroskiFTC.xlsx"><img src="img/GS.png" style={{ height: "20vw", maxHeight: "150px" }} /></a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
