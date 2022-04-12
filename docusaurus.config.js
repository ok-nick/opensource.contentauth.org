// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CAI Open Source',
  tagline: 'Open source tools for tracing media provenance',
  url: 'https://contentauth.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'contentauth',
  projectName: 'opensource.contentauth.org',
  stylesheets: [
    // Acumin Pro (temporary)
    'https://use.typekit.net/wgs7uns.css',
    // Adobe Clean
    'https://use.typekit.net/dnb4eqs.css',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // See here for configuration options:
  // https://docusaurus.io/docs/api/themes/configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Content Authenticity Initiative',
          src: 'img/logo-text.svg',
          width: 180,
          height: 54,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Get started',
          },
          {
            href: 'https://github.com/contentauth',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.contentauthenticity.org',
            label: 'Learn more',
            position: 'right',
          },
          {
            href: 'https://verify.contentauthenticity.org',
            label: 'Verify',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/contentauth',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/contentauth',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/contentauth',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Adobe`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
