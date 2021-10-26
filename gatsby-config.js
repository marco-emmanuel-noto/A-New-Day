module.exports = {
    siteMetadata: {
        siteUrl: "https://anewdaymain.gatsbyjs.io/",
        title: "A New Day Studio"
    },
    plugins: ["gatsby-plugin-breakpoints",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp", {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        }, {
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
        }
    ]
};
