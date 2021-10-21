import React, {useState, useEffect} from "react"
import ProgressiveVideo from "../components/ProgressiveVideo/ProgressiveVideo"
import HeroDesktopVideo from "../assets/progVideo/HeroDesktopVideo.mp4"
import LightHeroDesktop from "../assets/progVideo/LightHeroDesktop.jpg"
import HeroMobileVideo from "../assets/progVideo/HeroMobileVideo.mp4"
import LightHeroMobile from "../assets/progVideo/LightHeroMobile.jpg"
import {Box, Heading, VStack} from "@chakra-ui/react"
import "../components/index.css"
import Showoff from "../components/ImageContainer/Showoff"
import Header from "../components/UI/Typography/Header"

const IndexPage = () => {
    const header = "A new day"
    const subHeader = "A Berlin based creative studio with a thing for brand design";

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

                <VStack background="linear-gradient(180deg, rgba(0,0,0,0) 0%, #0F0F0F  40%)" pb="15rem">
                    <VStack
                        zIndex="999"
                        bgClip="text"
                        className="exp-gradient"
                        justifyContent="center"
                        alignItems="center">

                        <Header
                            children={header.toUpperCase()}
                            as="h1"
                            size="260px"
                            textAlign="center"/>
                        <Header
                            children={subHeader.toUpperCase()}
                            as="h2"
                            size="120px"
                            textAlign="center"/>

                    </VStack>

                </VStack>

                <Showoff/>
            </VStack>

        </Box>
    )

}

export default IndexPage
