// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  university: [
    // University Parent
    {
      type: "category",
      label: "University",
      link: {
        type: "doc",
        id: "university-home",
        //type: 'generated-index',
      },
      collapsed: false,
      items: [
        // CI
        {
          type: "doc",
          label: "Continuous Integration",
          id: "continuous-integration",
        },
        // CD
        {
          type: "doc",
          label: "Continuous Delivery & GitOps",
          id: "continuous-delivery",
        },

        //ff
        {
          type: "doc",
          label: "Feature Flags",
          id: "feature-flags",
        },
        //CCM
        {
          type: "doc",
          label: "Cloud Cost Management",
          id: "cloud-cost-management",
        },
        //sto
        {
          type: "doc",
          label: "Security Testing Orchestration",
          id: "sto",
        },
        //ce
        {
          type: "doc",
          label: "Chaos Engineering",
          id: "chaos-engineering",
        },
        // Instructions
        {
          type: "doc",
          label: "Instructions",
          id: "instructions",
        },
        // FAQs
        {
          type: "doc",
          label: "FAQs",
          id: "faqs",
        },
        // ILT
        {
          type: "category",
          label: "Instructor Led Training",
          link: {
            type: "generated-index",
            slug: "/instructor-led-training",
          },
          customProps: {
            description:
              "Instructor Led Training from Harness",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "instructor-led-training",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;


