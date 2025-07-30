import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from '@docusaurus/Translate';
import Layout from "@theme/Layout";

export default function Contact(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="𝐹𝐼𝑅𝑆𝑇 Slovenia Social media profiles">
            <main>
                <div className="container" style={{ paddingTop: "20px" }}>
                    <h1>{translate({id:"social-media.title", message:"Social media"})}</h1>
                    <h1 style={{ textAlign: "center" }}>Instagram</h1>
                    <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <div style={{ justifyContent: "center" }}>
                            <h2><em>𝐹𝐼𝑅𝑆𝑇</em> Slovenia</h2>
                            <a href="https://www.instagram.com/first.slovenia">
                                <img src="img/IGlogo.png" style={{ height: "20vw", maxHeight: "200px" }} />
                            </a>
                        </div>
                        <div style={{ justifyContent: "center" }}>
                            <h2>22903 VegaMind</h2>
                            <a href="https://www.instagram.com/vegamind.22903">
                                <img src="img/IGlogo.png" style={{ height: "20vw", maxHeight: "200px" }} />
                            </a>
                        </div>
                        <div style={{ justifyContent: "center" }}>
                            <h2>28080 VegaTech</h2>
                            <a href="https://www.instagram.com/vegatech.28080">
                                <img src="img/IGlogo.png" style={{ height: "20vw", maxHeight: "200px" }} />
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <div style={{ justifyContent: "center" }}>
                            <h2>YouTube</h2>
                            <a href="https://www.youtube.com/@FIRSTSlovenia"><img src="img/YTlogo.png" style={{ height: "20vw", maxHeight: "200px" }} /></a>
                        </div>
                        <div style={{ justifyContent: "center" }}>
                            <h2>TikTok</h2>
                            <a href="https://www.tiktok.com/@first.slovenia"><img src="img/forbidenChineselogo.png" style={{ height: "20vw", maxHeight: "200px" }} /></a>
                        </div>
                        <div style={{ justifyContent: "center" }}>
                            <h2>Discord</h2>
                            <a href="https://discord.gg/MRuywyFjTQ"><img src="img/DSlogo.png" style={{ height: "20vw", maxHeight: "200px" }} /></a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
