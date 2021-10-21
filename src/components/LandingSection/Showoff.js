import React from "react"
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import LandingSection from "./LandingSection";

const Showoff = () => {
    const {placeholderImage} = useStaticQuery(graphql `
    query {
      placeholderImage: file(name: {eq: "showoff"}) {
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
    const showoffImage = getImage(placeholderImage);

    return (<LandingSection
        staticImage={showoffImage}
        header="SHOWOFF"
        buttonColor="#F6D6D6"
        buttonText="HAVE A LOOK"/>);
};

export default Showoff