module.exports = {
  pathPrefix: `/mind-graph`,
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/hello`,
        titleToURL: `/mind-graph`
      },
    },
  ],
  siteMetadata: {
    title: "Mind Graph",
    siteUrl: "https://niemtec.com",
  },
}
