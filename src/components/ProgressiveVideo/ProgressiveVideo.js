import React, {useState, useEffect} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";
import ReactPlayer from 'react-player'

const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <Box overflow="hidden" w="100vw" h="100vh" bg={props.bgColour}>
            <ReactPlayer width="100%" height="auto" playing="true" url={props.video} muted loop="true" playsinline/>
        </Box>
    )
}

export default ProgressiveVideo