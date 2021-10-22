import React, {useEffect} from "react"
import {Box, VStack} from "@chakra-ui/react"
import Showoff from "../components/LandingSection/Showoff"
import Shop from "../components/LandingSection/Shop"
import About from "../components/LandingSection/About"
import MainHeader from "../components/LandingSection/MainHeader"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import HeroVideoMobile from "../components/ProgressiveVideo/HeroVideoMobile"
import HeroVideoDesktop from "../components/ProgressiveVideo/HeroVideoDesktop"
import AutoPlaySilentVideo from "../components/ProgressiveVideo/AutoPlaySilentVideo"
import HeroMobileVideo from "../assets/progVideo/HeroMobileVideo.mp4"

const IndexPage = () => {

    const breakpoints = useBreakpoint();

    return (
        <Box bg="#0F0F0F">
            <Box bg="#0F0F0F" position="fixed" top="0" left="0">
                <Box>
                <AutoPlaySilentVideo video={HeroMobileVideo}/>
                    {/* {breakpoints.sm
                        ? (<HeroVideoMobile/>)
                        : (<HeroVideoDesktop/>)} */}

                </Box>
            </Box>
            <VStack
                w="100vw"
                justifyContent="center"
                alignItems="center"
                position="relative"
                top="calc(100vh - 260px)"
                spacing="0">

                <MainHeader smallDevice={breakpoints.sm}/>

                <Showoff smallDevice={breakpoints.sm}/>
                <About smallDevice={breakpoints.sm}/>
                <Shop smallDevice={breakpoints.sm}/>
            </VStack>

        </Box>
    )

}

export default IndexPage
