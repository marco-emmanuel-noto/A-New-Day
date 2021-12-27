import React from "react"
import {Box, VStack} from "@chakra-ui/react"
import Showoff from "../components/LandingSection/Showoff"
import Shop from "../components/LandingSection/Shop"
import About from "../components/LandingSection/About"
import MainHeader from "../components/LandingSection/MainHeader"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import HeroVideo from "../components/ProgressiveVideo/HeroVideo"
import RadioSection from "../components/LandingSection/RadioSection"

const IndexPage = () => {

    const breakpoints = useBreakpoint();

    return (

        <Box>

            <HeroVideo/>

            <VStack
                w="100vw"
                justifyContent="center"
                alignItems="center"
                position="relative"
                spacing="0">

                <MainHeader/>

                <VStack bg="#0F0D0F">

                    <Showoff smallDevice={breakpoints.sm}/>
                    <About smallDevice={breakpoints.sm}/>

                    <Shop smallDevice={breakpoints.sm}/>
                    <RadioSection smallDevice={breakpoints.sm}/>
                </VStack>
            </VStack>

        </Box>
    )

}

export default IndexPage
