import React, {useState, useEffect} from "react"
import {Box, VStack} from "@chakra-ui/react"

const GifClip = (props) => {
    return (
        <Box
            bgClip="text"
            bgImage="url('https://anewday.studio/wp-content/uploads/2021/01/ExperimentalGrading_02.gif')"
            bgRepeat="no-repeat"
            bgSize="cover">
                {props.children}
            </Box>
    )
}

export default GifClip