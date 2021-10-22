import React, {useState, useEffect} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";
import AutoPlaySilentVideo from "./AutoPlaySilentVideo"

const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <Box overflow="hidden" w="100vw" h="100vh" bg={props.bgColour}>
            <img
                src={props.image}
                className="video-thumb tiny"
                style={{
                opacity: isVideoLoaded
                    ? 0
                    : 1
            }}/>

            <AutoPlaySilentVideo
                onLoadedData={handleVideoLoaded}
                video={props.video}
                className="progressive-video"
                style={{
                opacity: isVideoLoaded
                    ? 1
                    : 0
            }}/>
        </Box>
    )
}

export default ProgressiveVideo