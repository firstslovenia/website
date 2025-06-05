import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: '𝐹𝐼𝑅𝑆𝑇 Tech Slovenia',
    tagline: 'To inspire and solve challenges through robotics',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://firsttech.si',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'firstslovenia', // Usually your GitHub org/user name.
    projectName: 'ftcwebsite', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'sl'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            sl: {
                label: 'Slovenščina',
            },
        },
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'projects',
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'team-docs',
                path: 'team-docs',
                routeBasePath: 'team-docs',
                sidebarPath: './sidebars.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'past-teams',
                path: 'past-teams',
                routeBasePath: 'past-teams',
                sidebarPath: './sidebars.ts',
            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '𝐹𝐼𝑅𝑆𝑇 Tech Slovenia',
            logo: {
                alt: 'FIRST Slovenia Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: "docsVersion",
                    docsPluginId: "past-teams",
                    position: "left",
                    label: "Past teams",
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    type: 'docSidebar',
                    sidebarId: 'projectsSidebar',
                    position: 'left',
                    label: 'Projects',
                },
                {
                    type: "docsVersion",
                    docsPluginId: "team-docs",
                    position: "left",
                    label: "Team Docs",
                },
                {
                    to: "sponsors",
                    position: "left",
                    label: "Sponsors",
                },
                {
                    to: "contact",
                    position: "left",
                    label: "Contact",
                },
                {
                    href: 'https://firstglobal.si',
                    label: '𝐹𝐼𝑅𝑆𝑇 Global Slovenia',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'About us',
                    items: [
                        {
                            label: 'Past teams',
                            to: '/past-teams/team-2024-2025',
                        },
                    ],
                },
                {
                    title: 'Brand domains',
                    items: [
                        {
                            label: 'Maven Repository',
                            href: 'https://maven.firsttech.si/',
                            target: "_blank"
                        },
                        {
                            label: '𝐹𝐼𝑅𝑆𝑇 Global Slovenia',
                            href: 'https://firstglobal.si/',
                            target: "_blank",
                        },
                    ],
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/firstslovenia',
                            target: "_blank"
                        },
                        {
                            label: 'Instagram',
                            href: 'https://instagram.com/first.slovenia',
                            target: "_blank",
                        },
                        {
                            label: 'YouTube',
                            href: 'https://youtube.com/@FIRSTSlovenia',
                            target: "_blank",
                        },
                    ],
                },
                {
                    title: 'Contact us',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/MRuywyFjTQ',
                            target: "_blank",
                        },
                        {
                            label: 'PO Box',
                            to: 'contact',
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2024-${new Date().getFullYear()} 𝐹𝐼𝑅𝑆𝑇 Slovenia. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
