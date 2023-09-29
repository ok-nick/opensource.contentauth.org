const jsSdkSidebar = require('./docs/js-sdk/sidebars');

const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting started',
    },
    {
      type: 'category',
      label: 'JavaScript SDK',
      link: { type: 'doc', id: 'js-sdk/getting-started/overview' },
      collapsed: true,
      items: jsSdkSidebar.docs,
    },
    {
      type: 'category',
      label: 'c2patool',
      link: { type: 'doc', id: 'c2patool/readme' },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'c2patool/release-notes',
        },
        {
          type: 'doc',
          id: 'c2pa-service-example/readme',
        },
        {
          type: 'link',
          label: 'GitHub',
          href: 'https://github.com/contentauth/c2patool',
        },
      ],
    },
    {
      type: 'category',
      label: 'Rust SDK',
      link: { type: 'doc', id: 'rust-sdk/readme' },
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'API documentation',
          href: 'https://docs.rs/c2pa',
        },
        {
          type: 'link',
          label: 'GitHub',
          href: 'https://github.com/contentauth/c2pa-rs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Working with manifest data',
      link: { type: 'doc', id: 'manifest/understanding-manifest' },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'c2patool/manifest',
        },
        {
          type: 'doc',
          id: 'manifest/manifest-examples',
        },
        {
          type: 'doc',
          id: 'manifest/manifest-ref',
        },
        {
          type: 'doc',
          id: 'manifest/manifest-json-schema',
          label: 'JSON schema',
        },
        {
          type: 'doc',
          id: 'manifest/manifest-validation',
        },
        {
          type: 'doc',
          id: 'manifest/signing-manifests',
        },
        {
          type: 'doc',
          id: 'c2patool/x_509',
          label: 'Creating and using a certificate',
        },
      ],
    },
    {
      type: 'doc',
      id: 'community-resources',
    },
  ],
};

module.exports = sidebars;
