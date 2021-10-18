import React, {useState, useEffect} from "react"
import {StaticImage} from "gatsby-plugin-image"
import ProgressiveVideo from "../components/ProgressiveVideo"
import HeroDesktopVideo from "../assets/progVideo/HeroDesktopVideo.mp4"
import LightHeroDesktop from "../assets/progVideo/LightHeroDesktop.jpg"
import HeroMobileVideo from "../assets/progVideo/HeroMobileVideo.mp4"
import LightHeroMobile from "../assets/progVideo/LightHeroMobile.jpg"
import {Box, Heading, VStack} from "@chakra-ui/react"
import "../components/index.css"
import BridgeTest from "../components/ImageContainer/BridgeTest"

const IndexPage = () => {
    const header = "A new day"
    const subHeader = "A Berlin based creative studio with a thing for brand design";

    // useEffect(() => {     window.addEventListener("scroll", () => {         const
    // currentScroll = window.scrollY;         let opacity;         if
    // (currentScroll <= checkpoint) {             opacity = 1 - currentScroll /
    // checkpoint;         } else {             opacity = 0;         } document
    // .querySelector(".video-container")             .style .opacity = opacity; })
    // })

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
        <Box>
            <Box bg="#0F0D0F" position="fixed" top="0" left="0">
                <Box className="video-container"><ProgressiveVideo
                    mobileVideo={HeroMobileVideo}
                    desktopVideo={HeroDesktopVideo}
                    mobileImage={LightHeroMobile}
                    desktopImage={LightHeroDesktop}
                    bgColour={"#0F0D0F"}/></Box>
            </Box>
            <VStack
                w="100vw"
                justifyContent="center"
                alignItems="center"
                position="relative"
                top="calc(100vh - 260px)"
                spacing="0">

                <VStack
                    background="linear-gradient(180deg, rgba(0,0,0,0) 0%, #0F0D0F 40%)"
                    pb="15rem">
                    <VStack
                        zIndex="999"
                        bgClip="text"
                        className="exp-gradient"
                        justifyContent="center"
                        alignItems="center">
                        <h1 id="test" className="main-header">{header.toUpperCase()}</h1>
                        <h2 className="secondary-header">{subHeader.toUpperCase()}</h2>
                    </VStack>

                </VStack>

                <Box position="relative"><BridgeTest/></Box>
            </VStack>

        </Box>
    )

}

export default IndexPage
