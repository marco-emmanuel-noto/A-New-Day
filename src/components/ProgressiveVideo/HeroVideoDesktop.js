import React from "react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"
import HeroDesktopVideo from "../../assets/progVideo/HeroDesktopVideo.mp4"
import LightHeroDesktop from "../../assets/progVideo/LightHeroDesktop.jpg"

const HeroVideoDesktop = () => {

    return (<ProgressiveVideo image={LightHeroDesktop} video={HeroDesktopVideo}/>)

}

export default HeroVideoDesktop
