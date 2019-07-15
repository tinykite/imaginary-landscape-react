/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
  `gatsby-plugin-postcss`,
  `gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/podcasts`,
    },
  },
  `gatsby-transformer-remark`,
 ]  
}