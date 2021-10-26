import React from "react"

import {BgImage} from 'gbimage-bridge';
import {Flex, VStack, Box} from "@chakra-ui/react"
import AndButton from "../UI/AndButton";
import Header from "../UI/Typography/Header";

const LandingSection = (props) => {

    return (
        <Box bg="#0F0F0F">

            <BgImage
                image={props.staticImage}
                style={{
                minWidth: "100vw"
            }}>
                <Flex
                    w="100wv"
                    h="150vh"
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <VStack spacing="2rem">
                        {props.header && <Header
                            as="h2"
                            children={props.header}
                            size={props.smallDevice
                            ? "80px"
                            : "140px"}
                            color="#0F0F0F"/>}

                        {props.buttonText && <AndButton bg={props.buttonColor} text={props.buttonText}/>}
                    </VStack>
                </Flex>
            </BgImage>
        </Box>

    );
};

export default LandingSection