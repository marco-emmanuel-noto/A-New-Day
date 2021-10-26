import React from "react"
import AutoPlaySilentVideo from "../ProgressiveVideo/AutoPlaySilentVideo";
import {Flex, VStack} from "@chakra-ui/react"
import {FaSoundcloud} from 'react-icons/fa';

const CardGradient = (props) => {
    return (
        <Flex
            w={props.w}
            h={props.h}
            borderRadius={props.borderRadius}
            overflow="hidden"
            position="relative"
            justifyContent="center"
            alignItems="center">
            <AutoPlaySilentVideo video={props.video} className="video-stretch"/>
            <VStack
                spacing={props.spacing}
                position="relative"
                zIndex="1"
                justifyContent="center"
                alignItems="center">{props.children}</VStack>
        </Flex>
    )
}

export default CardGradient