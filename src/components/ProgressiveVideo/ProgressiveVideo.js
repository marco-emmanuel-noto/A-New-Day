import React, {useState} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";


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
            <video autoPlay playsInline muted loop>
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