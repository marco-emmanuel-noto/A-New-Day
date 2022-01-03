require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
    siteMetadata: {
        siteUrl: "https://anewdaymain.gatsbyjs.io/",
        title: "A New Day Studio",
        description: "Brand Design – Berlin × Budapest"
    },
    plugins: [
        "gatsby-plugin-breakpoints",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        `gatsby-plugin-react-helmet`,
        "gatsby-transformer-sharp", {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: "./src/assets/"
            },
            __key: "assets"
        }, {
            resolve: "@chakra-ui/gatsby-plugin",
            options: {
                /**
             * @property {boolean} [resetCSS=true]
             * if false, this plugin will not use `<CSSReset />
             */
                resetCSS: true,
                /**
             * @property {boolean} [isUsingColorMode=true]
             * if false, this plugin will not use <ColorModeProvider />
             */
                isUsingColorMode: true
            }
        }, {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `qfbljcu4ucz9`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ]
};
