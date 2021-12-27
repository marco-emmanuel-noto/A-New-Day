import React, {useContext} from "react"
import {Box} from "@chakra-ui/react"
import "./ProgressiveVideo.css";
import AutoPlaySilentVideo from "./AutoPlaySilentVideo"
import VideoContext from "../../context/VideoContext"

const ProgressiveVideo = (props) => {
    const [isVideoLoaded,
        setIsVideoLoaded] = React.useState(false);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    const {isVisible, onToggleVisibility} = useContext(VideoContext)
    

    

    return (
        <Box overflow="hidden" w="100vw" h="100vh" bg={props.bgColour} opacity={isVisible? "1" : "0"}>
            <Box
                
                className="video-thumb"
                position="absolute"
                
                bg="#0F0D0F"
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