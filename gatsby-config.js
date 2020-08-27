const path = require("path");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: `/gatsby-digital-garden`,
  siteMetadata: {
    title: `Mind Graph`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/hello",
        contentPath: `${__dirname}/atoms`
      },
    },
  ],
};
