import React, {useState, useEffect} from "react"
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';
import {Flex, Button, Box} from "@chakra-ui/react"
import AndButton from "../UI/AndButton";

const Showoff = () => {
    const {placeholderImage} = useStaticQuery(graphql `
      query {
        placeholderImage: allFile(filter: {dir: {eq: "/Users/marco/and/src/assets/landingSections"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 2000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    `);
    const pluginImage = getImage(placeholderImage.edges[1].node);
    console.log(placeholderImage.edges[1].node)

    return (

      

        <BgImage image={pluginImage}>
            <Flex
                w="100vw"
                h="150vh"
                direction="column"
                justifyContent="center"
                alignItems="center">

                <AndButton bg="#F9D9D9" text={"HAVE A LOOK"}/>
            </Flex>
        </BgImage>



    );
};

export default Showoff