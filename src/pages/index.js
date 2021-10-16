import * as React from "react"
import ProgressiveVideo from "../components/ProgressiveVideo"
import HeroDesktopVideo from "../assets/progVideo/HeroDesktopVideo.mp4"
import LightHeroDesktop from "../assets/progVideo/LightHeroDesktop.jpg"
import HeroMobileVideo from "../assets/progVideo/HeroMobileVideo.mp4"
import LightHeroMobile from "../assets/progVideo/LightHeroMobile.jpg"

const IndexPage = () => {
    return (<ProgressiveVideo
        mobileVideo={HeroMobileVideo}
        desktopVideo={HeroDesktopVideo}
        mobileImage={LightHeroMobile}
        desktopImage={LightHeroDesktop}
        bgColour={"#0F0D0F"}
        />)
}

export default IndexPage
