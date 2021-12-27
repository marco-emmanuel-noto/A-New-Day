import React from "react"
import {Box, VStack} from "@chakra-ui/react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import HeroDesktopVideo from "../../assets/progVideo/HeroDesktopVideo.mp4"
import HeroMobileVideo from "../../assets/progVideo/HeroMobileVideo.mp4"
import {useBreakpoint} from "gatsby-plugin-breakpoints";
import ResponsiveProgressiveVideo from "./ResponsiveProgressiveVideo"

const HeroVideo = () => {
    const breakpoints = useBreakpoint();

    return (
        <ResponsiveProgressiveVideo mobileVideo={HeroMobileVideo} desktopVideo={HeroDesktopVideo} />
    )

}

export default HeroVideo
