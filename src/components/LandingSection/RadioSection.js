import React from "react";
import {Flex} from "@chakra-ui/react";
import CardGradient from "../GifClip/CardGradient";
import TrippyM from "../../assets/GifClip/TrippyM.mp4"
import {FaSoundcloud} from 'react-icons/fa';
import Header from "../UI/Typography/Header";
import AndButton from "../UI/AndButton";

const RadioSection = (props) => {
    return (
        <Flex
            w="100%"
            h="100vh"
            bg="#0F0F0F"
            justifyContent="center"
            alignItems="center">
            <CardGradient video={TrippyM} borderRadius="20px" w={props.smallDevice ? "85%" : "95%"} h={props.smallDevice ? "80%" : "50%"} spacing="1.5rem">
                <FaSoundcloud size={45}/>
                <Header as="h2" size="40px" color="#0F0F0F">A NEW DAY RADIO</Header>
                <AndButton bg="#FFFFFF" text="LISTEN IN"/>
            </CardGradient>
        </Flex>
    )
}

export default RadioSection