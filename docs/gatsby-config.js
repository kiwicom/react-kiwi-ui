const path = require("path");
const capitalize = require("capitalize");

function pathToWords(p) {
  return p
    .split("/")
    .filter(Boolean)
    .map(part => {
      if (part === "code-kiwi-com") return "code.kiwi.com";
      return capitalize(part.replace(/-/g, " "));
    });
}

module.exports = {
  siteMetadata: {
    title: "Orbit",
    description: "Open source design system for your next travel project.",
    siteUrl: "https://orbit.kiwi/",
    author: "Kiwi.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documentation",
        path: `${__dirname}/src/documentation`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              // The base for generating different image widths.
              maxWidth: 590,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`, `mdx`],
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              backticks: false,
              dashes: `oldschool`,
            },
          },
        ],
        remarkPlugins: [require("remark-deflist")],
        rehypePlugins: [],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ["breadcrumbs", "description", "path"],
        resolvers: {
          Mdx: {
            breadcrumbs: n => pathToWords(n.fields.slug),
            description: n => n.frontmatter.description,
            path: n => n.fields.slug,
          },
        },
        filter: n => path.relative(__dirname, n.fileAbsolutePath).includes("documentation"),
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    // our custom plugins place here:
    {
      resolve: require.resolve("./plugins/contributors"),
      options: {
        repo: "orbit",
        owner: "kiwicom",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-meta-redirect",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        snippets: path.join(__dirname, "src/snippets"),
      },
    },
  ],
};
