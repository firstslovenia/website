import type {ReactNode} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from '@docusaurus/Translate';
import Layout from "@theme/Layout";

export default function Sponsors(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="𝐹𝐼𝑅𝑆𝑇 Slovenia supporters">
            <main>
                <div className="container" style={{paddingTop: "20px"}}>
                    <h1>{translate({id: "sponsors.title", message: "Sponsors"})}</h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '100px',
                            fontSize: '20px',
                        }}>
                        <a href="https://404.si" target="_blank">
                            <img src="img/sponsors/404.png" alt="Zavod 404"/>
                        </a>
                        <a href="http://ljubljana.si" target="_blank">
                            <img src="img/sponsors/mol.png" alt="Mestna občina Ljubljana"/>
                        </a>
                        <a href="https://www.vegova.si" target="_blank">
                            <img src="img/sponsors/vegova.png" alt="Vegova Ljubljana"/>
                        </a>
                    </div>
                    <hr/>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '70px',
                            fontSize: '20px',
                        }}>
                        <a href="https://blaj-fasteners.com" target="_blank">
                            <img src="img/sponsors/blaj.png" alt="Blaj Fasteners"/>
                        </a>
                        <a href="https://www.zakladi.si" target="_blank">
                            <img src="img/sponsors/zakladi-slovenije.png" alt="Zakladi Slovenije"/>
                        </a>
                        <a href="https://eles.si" target="_blank">
                            <img src="img/sponsors/eles.png" alt="Eles"/>
                        </a>
                    </div>
                    <hr/>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '100px',
                            fontSize: '20px',
                        }}>
                        <a href="https://nefiks.si" target="_blank">
                            <img src="img/sponsors/nefiks.jpg" alt="Zavod Nefiks"/>
                        </a>
                        <a href="https://bubadu.com" target="_blank">
                            <img src="img/sponsors/bubadu.png" alt="Bubadu"/>
                        </a>
                        <a href="https://nrg.si" target="_blank">
                            <img src="img/sponsors/nrg.png" alt="NRG"/>
                        </a>
                    </div>
                    <hr/>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '100px',
                            fontSize: '20px',
                        }}>
                        <a href="https://dewesoft.com" target="_blank">
                            <img src="img/sponsors/dewesoft.png" alt="DEWESoft"/>
                        </a>
                        <a href="https://triglav.si" target="_blank">
                            <img src="img/sponsors/triglav.png" alt="Zavarovalnica Triglav"/>
                        </a>
                        <a href="https://rls.si" target="_blank">
                            <img src="img/sponsors/rls.png" alt="RLS"/>
                        </a>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '100px',
                            fontSize: '20px',
                        }}>
                        <a href="https://foculus.si" target="_blank">
                            <img src="img/sponsors/foculus.png" alt="Pizzerija Foculus"/>
                        </a>
                        <a href="https://plastikatrcek.si" target="_blank">
                            <img src="img/sponsors/trcek.jpg" alt="Plastika Trček"/>
                        </a>
                        <a href="https://sensor.si" target="_blank">
                            <img src="img/sponsors/sensor.png" alt="SENSOR d.o.o."/>
                        </a>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
