import * as React from "react"
import ProgressiveVideo from "../components/ProgressiveVideo"
import HeroDesktopVideo from "../assets/progVideo/HeroDesktopVideo.mp4"
import LightHeroDesktop from "../assets/progVideo/LightHeroDesktop.jpg"


const IndexPage = () => {
    return (<ProgressiveVideo video={HeroDesktopVideo} image={LightHeroDesktop}/>)
}

export default IndexPage
