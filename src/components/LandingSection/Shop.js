import React from "react"
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import LandingSection from "./LandingSection";

const Shop = () => {
    const {placeholderImage} = useStaticQuery(graphql `
    query {
      placeholderImage: file(name: {eq: "shop"}) {
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
    const shopImage = getImage(placeholderImage);

    return (<LandingSection
        staticImage={shopImage}
        header=""
        buttonColor="#FFFF"
        buttonText="BETA SHOP"/>);
};

export default Shop