import React from "react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import {Box} from "@chakra-ui/react"
import HeroMobileVideo from "../../assets/progVideo/HeroMobileVideo.mp4"
import LightHeroMobile from "../../assets/progVideo/LightHeroMobile.jpg"

const HeroVideoMobile = () => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <Box overflow="hidden" w="100vw" h="100vh">
            <img
                src={LightHeroMobile}
                className="video-thumb tiny"
                style={{
                opacity: isVideoLoaded
                    ? 0
                    : 1
            }}/>
            <video muted autoPlay playsInline loop className="progressive-video">
                <source
                    src={HeroMobileVideo}
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

export default HeroVideoMobile
