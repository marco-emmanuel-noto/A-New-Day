import React, {useContext, useEffect} from "react";
import {Flex, Box} from "@chakra-ui/react";
import CardGradient from "../GifClip/CardGradient";
import TrippyM from "../../assets/GifClip/TrippyM.mp4"
import {FaSoundcloud} from 'react-icons/fa';
import Header from "../UI/Typography/Header";
import AndButton from "../UI/AndButton";
import {useInView} from 'react-intersection-observer';
import MenuColorContext from "../../context/MenuColorContext";

const RadioSection = (props) => {

    const {ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: "-10% 0% -90% 0%"

    });

    const {isLit, onToggleLight} = useContext(MenuColorContext)

    useEffect(() => {
        onToggleLight()
    }, [inView])

    return (
        <Flex
            w="100%"
            h="100vh"
            bg="#0F0F0F"
            justifyContent="center"
            alignItems="center">
            <Flex
                justifyContent="center"
                alignItems="center"
                w="100%"
                h={props.smallDevice
                ? "80%"
                : "50%"}
                ref={ref}>
                <CardGradient
                    video={TrippyM}
                    borderRadius="20px"
                    w={props.smallDevice
                    ? "85%"
                    : "95%"}
                    h="100%"
                    spacing="1.5rem">
                    <FaSoundcloud size={45}/>
                    <Header as="h2" size="40px" color="#0F0F0F">A NEW DAY RADIO</Header>
                    <AndButton bg="#FFFFFF" text="LISTEN IN"/>
                </CardGradient>
            </Flex>
        </Flex>
    )
}

export default RadioSection