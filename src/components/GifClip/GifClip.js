import React, {useState, useEffect} from "react"
import {Box, VStack} from "@chakra-ui/react"

const GifClip = (props) => {
    return (
        <Box className="moving-gradient">
            {props.children}
        </Box>
    )
}

export default GifClip