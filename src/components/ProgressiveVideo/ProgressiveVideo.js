import React, {useState, useEffect} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";

const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    useEffect(() => {
        const video = document.getElementsByClassName("progressive-video")
        if(video[0].paused) {
            handleVideoLoaded()
        }
    }); 

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
            <video muted autoPlay playsInline loop className="progressive-video">
                <source
                    src={props.video}
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