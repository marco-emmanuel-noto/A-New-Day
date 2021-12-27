import React from "react"
import {Box, VStack} from "@chakra-ui/react"
import ProgressiveVideo from "../../components/ProgressiveVideo/ProgressiveVideo"

import {useBreakpoint} from "gatsby-plugin-breakpoints";

const ResponsiveProgressiveVideo = (props) => {
const {mobileVideo, desktopVideo} = props;

    const breakpoints = useBreakpoint();

    return (
        <Box position="fixed" top="4rem" left="0">
            {breakpoints.sm && <ProgressiveVideo video={mobileVideo}/>}
            {!breakpoints.sm && <ProgressiveVideo video={desktopVideo}/>}

        </Box>
    )

}

export default ResponsiveProgressiveVideo
