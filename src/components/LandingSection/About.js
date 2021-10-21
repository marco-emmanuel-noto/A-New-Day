import React from "react"
import {Flex, VStack} from "@chakra-ui/react"
import AndButton from "../UI/AndButton";
import Header from "../UI/Typography/Header";

const About = () => {

    return (
        <Flex
            w="100vw"
            h="200vh"
            direction="column"
            justifyContent="center"
            alignItems="center"
            pt="15rem">
            <VStack spacing="25rem" pb="15rem">
                <Header
                    as="h2"
                    children="MAKING PEOPLE FALL IN LOVE."
                    size="180px"
                    color="#FFFFFF"
                    lineHeight="1.2"/>
                <AndButton bg="#FFFFFF" text={"ABOUT A NEW DAY STUDIO"}/>
            </VStack>

        </Flex>
    );
};

export default About