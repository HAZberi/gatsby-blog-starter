/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hassaan's Portfolio",
    author: "Hassaan Zuberi",
    initials: "HZ",
    email: "hassaan.zuberi@ucalgary.ca",
    phone: "(587) 555-5555"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
  ],
}
