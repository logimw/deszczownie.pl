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
    titleTemplate: "%s · najlepsze rozwiązania w nawadnianiu rolnictwa!",
    description: `Oferujemy wiele rodzajów urządzeń nawadniających uprawy rolnicze takich jak deszczownie szpulowe i deszczownie mostowe, a także produkty pomocnicze jak pompy, linie przesyłowe, agregaty spalinowe, konsole niskociśnieniowe, zraszacze i wiele innych urządzeń skutecznych w nawadnianiu rolnictwa.`,
    image: "/lead_img.png",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets/images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src", "components"),
        assets: path.join(__dirname, "src", "assets"),
        hooks: path.join(__dirname, "src", "hooks"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Sans\:300,400,500,700`],
        display: "swap",
      },
    },
  ],
};
