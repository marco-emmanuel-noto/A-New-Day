import React from "react"
import {Box, VStack} from "@chakra-ui/react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import HeroDesktopVideo from "../../assets/progVideo/HeroDesktopVideo.mp4"
import HeroMobileVideo from "../../assets/progVideo/HeroMobileVideo.mp4"
import {useBreakpoint} from "gatsby-plugin-breakpoints";

const HeroVideo = () => {
    const breakpoints = useBreakpoint();

    return (
        <Box position="fixed" top="4rem" left="0">
            {breakpoints.sm && <ProgressiveVideo video={HeroMobileVideo}/>}
            {!breakpoints.sm && <ProgressiveVideo video={HeroDesktopVideo}/>}

        </Box>
    )

}

export default HeroVideo
