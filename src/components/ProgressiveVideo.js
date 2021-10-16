import React, {useState} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";
import {useMediaQuery} from "@chakra-ui/react"

const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    const [isPhone] = useMediaQuery("(max-width: 480px)");
    const [isTablet] = useMediaQuery("(min-width: 481px)", "(max-width: 768px)");
    const [isLaptop] = useMediaQuery("(min-width: 769px)", "(max-width: 1024px)");
    const [isDesktop] = useMediaQuery("(min-width: 1025px)", "(max-width: 1200px)");
    const [isTv] = useMediaQuery("(min-width: 1201px)");

    console.log(isPhone)

    return (
        <Box position="relative" overflow="hidden" w="100vw" h="100vh" bg={props.bgColour}>
            <img
                src={isPhone
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
                    src={isPhone
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