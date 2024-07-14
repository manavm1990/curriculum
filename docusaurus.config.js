// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SWIC Web Dev Curriculum",
  tagline: "CIS 177/277",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "SWIC Web Dev Curriculum",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.jpg",
        },
        items: [
          { to: "/docs/177/intro", label: "CIS 177" },
          { to: "/docs/277/translate-your-site", label: "CIS 277" },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Southwestern Illinois College. Built with Docusaurus.`,
      },

      // It's for syntax highlighting.
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
