/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'zzi3r1qb', // Replace with your Sanity project ID
        dataset: 'blogs', // Replace with your dataset (e.g., 'production')
        token: 'skL2ZLqxzKL0K83VGODdtctF80IAF34CDdvkEg52yZr30iH9iNIpimk2yjjt9TCq1xvC2L33mNGAft1J157mjKb91lnmX1Eo9jgEUKmaibPYPsyg3eu6ltPRL99BRrmPS0wVI7DbyXUkhxYuN1rF8yAQexPyvXDefWeef5agbPKlhSuiEZJa', // Optional if you need private access
        watchMode: true, // Optional - use this in development mode
        overlayDrafts: true, // Optional - use this if you want to see drafts
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
