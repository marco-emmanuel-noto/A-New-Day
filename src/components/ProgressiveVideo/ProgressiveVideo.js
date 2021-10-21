import React, {useState} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";
import { useBreakpoint } from "gatsby-plugin-breakpoints";


const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };


    const breakpoints = useBreakpoint;

    return (
        <Box position="relative" overflow="hidden" w="100vw" h="100vh" bg={props.bgColour}>
            <img
                src={breakpoints.sm
                ? props.mobileImage
                : props.desktopImage}
                className="video-thumb tiny"
                style={{
                opacity: isVideoLoaded
                    ? 0
                    : 1
            }}/>
            <video autoPlay playsInline muted loop>
                <source
                    src={breakpoints.sm
                    ? props.mobileVideo
                    : props.desktopVideo}
                    type="video/mp4"
                    onLoadedData={handleVideoLoaded}
                    style={{
                    opacity: isVideoLoaded
                        ? 1
                        : 0
                }}/>
            </video>
        </Box>
    )
}

export default ProgressiveVideo