import React from "react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"

import HeroMobileVideo from "../../assets/progVideo/HeroMobileVideo.mp4"
import LightHeroMobile from "../../assets/progVideo/LightHeroMobile.jpg"

const HeroVideoMobile = () => {

    return (<ProgressiveVideo image={LightHeroMobile} video={HeroMobileVideo}/>)

}

export default HeroVideoMobile
