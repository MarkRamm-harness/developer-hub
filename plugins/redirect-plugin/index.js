const fs = require("fs-extra");
const path = require("path");
// import { LoadContext, Plugin } from "@docusaurus/types";
const docsPluginExports = require("@docusaurus/plugin-content-docs");

const docsPlugin = docsPluginExports.default;

async function docsPluginEnhanced(context, options) {
  const docsPluginInstance = await docsPlugin(context, options);

  const { siteConfig } = context;
  const { themeConfig } = siteConfig; // , title, favicon, url: siteUrl, baseUrl
  const { redirectExport } = themeConfig || {};

  if (!redirectExport) {
    throw new Error(
      `You need to specify 'redirectExport' object in 'themeConfig' with 'destPath' field in it`
    );
  }

  const { destPath } = redirectExport; // sourcePath,

  if (!destPath) {
    throw new Error(
      "You specified the `redirectExport` object in `themeConfig` but the `destPath` field was missing."
    );
  }

  return {
    ...docsPluginInstance,

    /*
    async contentLoaded({ content, actions }) {
      // Create default plugin pages
      await docsPluginInstance.contentLoaded({ content, actions });

      // Create your additional pages
      console.log("...contentLoaded...", content);
      // const {blogPosts, blogTags} = content;
    },
    */

    async postBuild(params) {
      const { outDir, content } = params; //, siteConfig

      if (
        !content ||
        !content.loadedVersions ||
        content.loadedVersions.length < 1 ||
        content.loadedVersions[0].docs.length < 1
      ) {
        return null;
      }
      // const { routeBasePath } = options;
      // const docsBaseUrl = normalizeUrl([siteUrl, baseUrl, routeBasePath]);

      const docs = content.loadedVersions[0].docs;

      let strRedirects =
        "# Redirects For Netlify\r\n# From <space> To - https://docs.netlify.com/routing/redirects/\r\n\r\n";

      await Promise.all(
        docs.map(async (post) => {
          const {
            id: metadataId,
            // metadata: {
            title: metadataTitle,
            permalink,
            frontMatter,
            // description,
            lastUpdatedAt,
            // },
          } = post;
          const { id, title, data, alias } = frontMatter;

          const dispId = id || metadataId;
          const dispTitle = title || metadataTitle;
          const dispDate = data || lastUpdatedAt || "";

          if (alias) {
            if (Array.isArray(alias)) {
              alias.forEach((al) => {
                strRedirects += `# ${dispId} ${dispTitle} ${dispDate}\r\n${al} ${permalink}\r\n\r\n`;
              });
            } else {
              strRedirects += `\r\n${alias} ${permalink}\r\n\r\n`;
            }
          }

          return title;
        })
      ); // .then((items) => items.forEach(feed.addItem));

      fs.outputFile(path.join(outDir, destPath), strRedirects);
    },
  };
}

module.exports = {
  ...docsPluginExports,
  default: docsPluginEnhanced,
};
