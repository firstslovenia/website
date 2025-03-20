import type {ReactNode} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Contact(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">
            <main>
                <div className="container" style={{paddingTop: "20px"}}>
                    <h1>Contact us</h1>
                    <p style={{fontSize: "20px"}}>
                        <b><i>FIRST</i> Slovenia</b><br/>
                        Zavod 404<br/>
                        Mencingerjeva ulica 7, 1000 Ljubljana
                    </p>
                    <p style={{fontSize: "16px"}}>
                        <b>Email:</b><br/>
                        <a href="mailto:info@firstglobal.si">info@firstglobal.si</a>
                    </p>
                </div>
            </main>
        </Layout>
    );
}
