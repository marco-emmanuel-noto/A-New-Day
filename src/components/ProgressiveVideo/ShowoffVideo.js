import React from "react"
import {Box, VStack} from "@chakra-ui/react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import ShowoffDesktopVideo from "../../assets/progVideo/ShowoffDesktopVideo.mp4"

const ShowoffVideo = () => {
    return (<ProgressiveVideo video={ShowoffDesktopVideo}/>)

}

export default ShowoffVideo
