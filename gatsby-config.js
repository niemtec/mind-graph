module.exports = {
  pathPrefix: `/mind-graph`,
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/`,
        rootNote: `/hello`
      },
    },
  ],
  siteMetadata: {
    title: "Mind Graph"
  },
}
