import React from "react"
import {Flex, VStack} from "@chakra-ui/react"
import AndButton from "../UI/AndButton";
import Header from "../UI/Typography/Header";

const About = (props) => {

    return (
        <Flex
            w="100vw"
            h="200vh"
            direction="column"
            justifyContent="center"
            alignItems="center"
            pt="15rem"
            bg="#0F0F0F">
            <VStack spacing="25rem" pb="15rem">
                <Header
                    as="h2"
                    children="MAKING PEOPLE FALL IN LOVE."
                    size={props.smallDevice
                    ? "80px"
                    : "140px"}
                    color="#FFFFFF"
                    lineHeight="1.2"/>
                <AndButton bg="#FFFFFF" text={"ABOUT A NEW DAY STUDIO"}/>
                
            </VStack>

        </Flex>
    );
};

export default About