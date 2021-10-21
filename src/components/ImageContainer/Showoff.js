import React, {useState, useEffect} from "react"
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';
import {Flex, VStack, Box} from "@chakra-ui/react"
import AndButton from "../UI/AndButton";
import Header from "../UI/Typography/Header";

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
    const showoffImage = getImage(placeholderImage.edges[1].node);
    const shopImage = getImage(placeholderImage.edges[0].node);

    return (

        <Box>

            <BgImage image={showoffImage}>
                <Flex
                    w="100%"
                    h="150vh"
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <VStack spacing="2rem">
                        <Header as="h2" children="SHOWOFF" size="140px" color="#0F0F0F"/>

                        <AndButton bg="#F9D9D9" text={"HAVE A LOOK"}/>
                    </VStack>
                </Flex>
            </BgImage>

            <Flex
                w="100vw"
                h="200vh"
                direction="column"
                justifyContent="center"
                alignItems="center"
                pt="15rem">
                <VStack spacing="25rem">
                    <Header
                        as="h2"
                        children="MAKING PEOPLE FALL IN LOVE."
                        size="180px"
                        color="#FFFFFF"
                        lineHeight="1.2"/>
                    <AndButton bg="#FFFFFF" text={"ABOUT A NEW DAY STUDIO"}/>
                </VStack>

            </Flex>

            <BgImage image={shopImage}>
                <Flex
                    w="100%"
                    h="150vh"
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <VStack spacing="2rem">
                        <Header as="h2" children="SHOWOFF" size="140px" color="#0F0F0F"/>

                        <AndButton bg="#F9D9D9" text={"HAVE A LOOK"}/>
                    </VStack>
                </Flex>
            </BgImage>

        </Box>

    );
};

export default Showoff