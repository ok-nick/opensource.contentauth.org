const api = require('./api/api-sidebar');

const sidebars = {
  docs: [
    {
      type: 'doc',
      label: 'Quick start',
      id: 'js-sdk/getting-started/quick-start',
    },
    {
      type: 'doc',
      label: 'Architecture',
      id: 'js-sdk/getting-started/architecture',
    },
    {
      type: 'doc',
      label: 'Hosting assets',
      id: 'js-sdk/guides/hosting',
    },
    {
      type: 'category',
      label: 'Viewing manifest data',
      link: { type: 'doc', id: 'js-sdk/guides/viewing-manifest-data' },
      items: ['js-sdk/guides/selectors', 'js-sdk/guides/validation'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'API documentation',
      items: api('js-sdk/api'),
      collapsed: true,
    },
    {
      type: 'link',
      label: 'GitHub',
      href: 'https://github.com/contentauth/c2pa-js',
    },
  ],
};

module.exports = sidebars;
