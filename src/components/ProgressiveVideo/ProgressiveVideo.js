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
        if (video[0].paused) {
            video[0].play()
        }
    });

    return (

        <div
            dangerouslySetInnerHTML={{
            __html: ` <video muted autoPlay playsInline loop className="progressive-video"> <source src=${props.video} type="video/mp4"/> </video>`
        }}/>

    )
}

export default ProgressiveVideo