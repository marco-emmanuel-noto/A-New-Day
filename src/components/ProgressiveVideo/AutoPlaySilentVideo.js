import React, {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source
                src={props.video}
                onLoadedData={props.handleVideoLoaded ? props.handleVideoLoaded  : ""}
                style={props.style}
                type="video/mp4"/>
        </video>
    );
}