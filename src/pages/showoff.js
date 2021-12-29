import React from "react"
import {graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"

import {Flex, VStack, Grid, GridItem} from "@chakra-ui/react"
import ShowoffVideo from "../components/ProgressiveVideo/ShowoffVideo"

const ShowoffPage = ({data}) => {

    const images = data.allFile.edges
    console.log(images)

    return (
        <VStack>
            <ShowoffVideo/>
            <Grid templateColumns='repeat(2, 1fr)'>
                {images.map((image, index) => {
                    return (

                        <GridItem
                            gridColumn={index === 2 || index === 5
                            ? "1 / 3"
                            : "initial"}
                            w={index === 2 && "100vw"}>
                            <GatsbyImage image={image.node.childImageSharp.gatsbyImageData}/>

                        </GridItem>

                    )
                })}
            </Grid>
        </VStack>
    )
}

export const pageQuery = graphql `
query MyQuery {
  allFile(filter: {dir: {eq: "/Users/marco/and/src/assets/showoff"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
  `

export default ShowoffPage