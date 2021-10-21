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
      placeholderImage: file(name: {eq: "showoff"}) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    `);
    const showoffImage = getImage(placeholderImage);
    
    

    return (

        

            <BgImage image={showoffImage} style={{minWidth:"100vw"}}>
                <Flex
                    w="100wv"
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

            

        

    );
};

export default Showoff