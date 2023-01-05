/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Coding with Aziza`,
    description: `Complete Code, best tools and design systems.Prototype and build apps with React and React Native. `,
    keywords:
      "react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin",
    author: `@Aziza`,
  },
  plugins: [
    // Gatsby-Source-Contentful plugins ::::
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w5uzom0ays5o`,
        accessToken: "xDxbxH3-P6EjPxEBINEFJSESgmskpyJb1r4Dei4S6Io",
      },
    },

    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
