import React, {useState, useEffect} from "react"
import ProgressiveVideo from "../components/ProgressiveVideo/ProgressiveVideo"
import HeroDesktopVideo from "../assets/progVideo/HeroDesktopVideo.mp4"
import LightHeroDesktop from "../assets/progVideo/LightHeroDesktop.jpg"
import HeroMobileVideo from "../assets/progVideo/HeroMobileVideo.mp4"
import LightHeroMobile from "../assets/progVideo/LightHeroMobile.jpg"
import {Box, VStack} from "@chakra-ui/react"
import Showoff from "../components/LandingSection/Showoff"
import Header from "../components/UI/Typography/Header"
import Shop from "../components/LandingSection/Shop"
import GifClip from "../components/GifClip/GifClip"
import About from "../components/LandingSection/About"
import MainHeader from "../components/LandingSection/MainHeader"

const IndexPage = () => {

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
                <Box className="video-container"><ProgressiveVideo
                    mobileVideo={HeroMobileVideo}
                    desktopVideo={HeroDesktopVideo}
                    mobileImage={LightHeroMobile}
                    desktopImage={LightHeroDesktop}
                    bgColour={"#0F0F0F"}/></Box>
            </Box>
            <VStack
                w="100vw"
                justifyContent="center"
                alignItems="center"
                position="relative"
                top="calc(100vh - 260px)"
                spacing="0">

               <MainHeader />

                <Showoff/>
                <About />
                <Shop/>
            </VStack>

        </Box>
    )

}

export default IndexPage
