import React from "react";
import {GatsbyImage} from "gatsby-plugin-image"
import {Grid, GridItem} from '@chakra-ui/react'

const ShowoffGrid = (props) => {
    const {index, image} = props;

    return (
        <React.Fragment>
            <GridItem>
                <GatsbyImage image={image.node.childImageSharp.gatsbyImageData}/>
            </GridItem>
        </React.Fragment>
    )
}