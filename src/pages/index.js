import React, {useEffect} from "react"
import {Box, VStack} from "@chakra-ui/react"
import Showoff from "../components/LandingSection/Showoff"
import Shop from "../components/LandingSection/Shop"
import About from "../components/LandingSection/About"
import MainHeader from "../components/LandingSection/MainHeader"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import HeroVideoMobile from "../components/ProgressiveVideo/HeroVideoMobile"
import HeroVideoDesktop from "../components/ProgressiveVideo/HeroVideoDesktop"

const IndexPage = () => {

    const breakpoints = useBreakpoint();

    useEffect(() => {
        const windowHeight = window.screen.height;
        const checkpoint = windowHeight;
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            let opacity;
            if (currentScroll > checkpoint) {
                opacity = 0
            } else {
                opacity = 1;
            }
            document
                .querySelector(".video-container")
                .style
                .opacity = opacity;
        })
    })

    return (
        <Box bg="#0F0F0F">
            <Box bg="#0F0F0F" position="fixed" top="0" left="0">
                <Box className="video-container">

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

                <MainHeader smallDevice={breakpoints.sm}/>

                <Showoff smallDevice={breakpoints.sm}/>
                <About smallDevice={breakpoints.sm}/>
                <Shop smallDevice={breakpoints.sm}/>
            </VStack>

        </Box>
    )

}

export default IndexPage
