/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Deszczownie, nawadnianie w rolnictwie`,
    siteUrl: `https://deszczownie.netlify.app/`,
    description: `Oferujemy wiele rodzajów urządzeń nawadniających uprawy rolnicze takich jak deszczownie szpulowe i deszczownie mostowe, a także produkty pomocnicze jak pompy, linie przesyłowe, agregaty spalinowe, konsole niskociśnieniowe, zraszacze i wiele innych urządzeń skutecznych w nawadnianiu rolnictwa.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets/images`),
      },
    },
    {
      resolve: "gatsby-plugin-resolve-src",
      options: {
        srcPath: path.resolve(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
  ],
};
