// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orcada Guides',
  tagline: 'Cardano Stake Pool Guides',
  url: 'https://orcada-io.github.io',
  baseUrl: '/guides/',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/orcada-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'orcada-io', // Usually your GitHub org/user name.
  projectName: 'guides', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/orcada-io/guides/edit/master/',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Orcada Stake Pool Guides',
        logo: {
          alt: 'Orcada logo',
          src: 'img/orcada-logo.png',
        },
        items: [

        ],
      },
      footer: {
        links: [
          {
            title: 'COMMUNITY',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/orcada-io',
              }
            ]
          },
          {
            title: 'FOLLOW US',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/Orcada_io',
              },
              {
                label: 'Telegram',
                to: 'https://t.me/orcada',
              }
            ]
          },
          {
            title: 'LINKS',
            items: [
              {
                label: 'How to Stake ADA',
                to: 'https://orcada.io/staking/',
              },
              {
                label: 'NFTs',
                to: 'https://www.jpg.store/collection/e2885e5c7ebb308c7c0f5d8e8eb7e6078a7282e69cafb563bcd35e59',
              }
            ],
          }
        ],
        copyright: `<img src="img/orcada-logo.png" alt="Orcada" width="100"/> <br /> © ${new Date().getFullYear()} ORCADA PTY LTD`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
