// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  kb: [
    // Tutorial Link from KB
    {
      type: "link",
      label: "Tutorials",
      href: "/tutorials",
    },
    // Docs Link from KB
    {
      type: "link",
      label: "Documentation",
      href: "/docs",
    },
    // Cert Link from KB
    {
      type: "link",
      label: "Certifications",
      href: "/certifications",
    },
    // KB Parent
    {
      type: "category",
      label: "Knowledge Base",
      link: {
        type: "doc",
        id: "kb",
      },
      collapsed: false,
      items: [
        {
          /*
          type: "doc",
          label: "Continuous Integration",
          id: "continuous-integration",
          */
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "generated-index",
            slug: "continuous-integration",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-integration",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Continuous Delivery",
          id: "continuous-delivery",
          */
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "generated-index",
            slug: "/continuous-delivery",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-delivery",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Feature Flags",
          id: "feature-flags",
          */
          type: "category",
          label: "Feature Flags",
          link: {
            type: "generated-index",
            slug: "/feature-flags",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "feature-flags",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Cloud Cost Management",
          id: "cloud-cost-management",
          */
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "generated-index",
            slug: "/cloud-cost-management",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "cloud-cost-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Service Reliability Management",
          id: "service-reliability-management",
          */
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "generated-index",
            slug: "/service-reliability-management",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "service-reliability-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Security Testing Orchestration",
          id: "security-testing-orchestration",
          */
          type: "category",
          label: "Security Testing Orchestration",
          link: {
            type: "generated-index",
            slug: "/security-testing-orchestration",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "security-testing-orchestration",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Chaos Engineering",
          id: "chaos-engineering",
          */
          type: "category",
          label: "Chaos Engineering",
          link: {
            type: "generated-index",
            slug: "/chaos-engineering",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "chaos-engineering",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Continuous Error Tracking",
          id: "continuous-error-tracking",
          */
          type: "category",
          label: "Continuous Error Tracking",
          link: {
            type: "generated-index",
            slug: "/continuous-error-tracking",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "continuous-error-tracking",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Harness Platform",
          id: "platform",
          */
          type: "category",
          label: "Harness Platform",
          link: {
            type: "generated-index",
            slug: "/platform",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "platform",
            },
          ],
        },

      ],
    },

    // Community Link from KB
    {
      type: "link",
      label: "Community",
      href: "/community",
    },
    // Slack Link from KB
    {
      type: "link",
      label: "Join Slack",
      href: "https://join.slack.com/t/harnesscommunity/shared_invite/zt-1h2cy1up2-Bf3MQQvKTf~YkVcsnkJ5pw",
    },

  ],
};

module.exports = sidebars;
