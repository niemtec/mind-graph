module.exports = {
  pathPrefix: `/mind-graph`,
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `Mind Graph`,
    siteUrl: `https://niemtec.com`
  },
}
