import React, {useState, useEffect} from "react"
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';
import {Flex} from "@chakra-ui/react"

const BridgeTest = () => {
    const {placeholderImage} = useStaticQuery(graphql `
      query {
        placeholderImage: file(relativePath: { eq: "showoff.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `);
    const pluginImage = getImage(placeholderImage);

    return (

        <BgImage image={pluginImage}>
            <Flex w="100vw" h="150vh" direction="column">

            </Flex>
        </BgImage>

    );
};

export default BridgeTest