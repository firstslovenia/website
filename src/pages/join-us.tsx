import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from '@docusaurus/Translate';
import Layout from "@theme/Layout";

export default function Contact(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Join FIRST Slovenia and its community!">
            <main>
                <div className="container" style={{ paddingTop: "20px" }}>
                    <h1>{translate({ id: "join-us.title", message: "Join us" })}</h1>
                    <p dangerouslySetInnerHTML={{__html: translate({ id: "join-us.students", message: 'If you want to join FIRST Slovenia, you can do so by joining our Discord server. We are always looking for new members to join our community and help us with our mission of promoting STEM education and robotics in Slovenia.'})}}></p>
                    <center>
                        <a href="https://discord.gg/MRuywyFjTQ"><img src="img/DSlogo.png" style={{ height: "20vw", maxHeight: "200px" }} /></a>
                    </center>
                    <p dangerouslySetInnerHTML={{__html: translate({ id: "join-us.mentors", message: "If you are interested in starting your own team check our <a href=\"/mentor\">mentor page</a>. For additional information, join the Discord server above or contact us via email at <a href=\"mailto:info@firstslo.si\">info@firtslo.si</a>."})}}></p>

                </div>
            </main>
        </Layout>
    );
}

