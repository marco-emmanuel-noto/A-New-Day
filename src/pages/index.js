import React from "react"
import {Box, VStack} from "@chakra-ui/react"
import Showoff from "../components/LandingSection/Showoff"
import Shop from "../components/LandingSection/Shop"
import About from "../components/LandingSection/About"
import MainHeader from "../components/LandingSection/MainHeader"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import HeroVideoMobile from "../components/ProgressiveVideo/HeroVideoMobile"
import HeroVideoDesktop from "../components/ProgressiveVideo/HeroVideoDesktop"
import RadioSection from "../components/LandingSection/RadioSection"

const IndexPage = () => {

    const breakpoints = useBreakpoint();

    return (
        <Box>
            <Box position="fixed" top="4rem" left="0">
                <Box>

                    {breakpoints.sm
                        ? (<HeroVideoMobile/>)
                        : (<HeroVideoDesktop/>)}

                </Box>
            </Box>
            <VStack
                w="100vw"
                justifyContent="center"
                alignItems="center"
                position="relative"
                top="calc(100vh - 260px)"
                spacing="0">

                <MainHeader smallDevice={breakpoints.sm}/> {/* <Button onClick={location.state.handleDarkMode}>try</Button> */}

                <Showoff smallDevice={breakpoints.sm}/>
                <About smallDevice={breakpoints.sm}/>
                <Shop smallDevice={breakpoints.sm}/>
                <RadioSection smallDevice={breakpoints.sm}/>
            </VStack>

        </Box>
    )

}

export default IndexPage
