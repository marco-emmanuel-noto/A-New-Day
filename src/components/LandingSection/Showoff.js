import React, {useContext, useEffect} from "react"
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import LandingSection from "./LandingSection";
import {useInView} from 'react-intersection-observer';
import {Box} from "@chakra-ui/react"
import MenuColorContext from "../../context/MenuColorContext";

const Showoff = (props) => {
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

    const {ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "-10% 0% -90% 0%"

    });

    const {isLit, onToggleLight} = useContext(MenuColorContext)

    useEffect(() => {
        onToggleLight()
    }, [inView])

    return (

        <Box ref={ref}>
            <LandingSection
                staticImage={showoffImage}
                header="SHOWOFF"
                buttonColor="#F6D6D6"
                buttonText="HAVE A LOOK"
                smallDevice={props.smallDevice}/>
        </Box>

    );
};

export default Showoff