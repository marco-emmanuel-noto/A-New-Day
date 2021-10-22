import React from "react"
import {VStack, Box} from "@chakra-ui/react"
import Header from "../UI/Typography/Header";


const MainHeader = (props) => {
    const header = "A new day"
    const subHeader = "A Berlin based creative studio with a thing for brand design";

    return (
        <VStack
            background="linear-gradient(180deg, rgba(0,0,0,0) 0%, #0F0F0F  40%)"
            pb="15rem">

            <VStack zIndex="999" justifyContent="center" alignItems="center">

                <Header
                    children={header.toUpperCase()}
                    as="h1"
                    size={props.smallDevice
                    ? "70px"
                    : "260px"}
                    textAlign="center"
                    className="gradient-animation"
                    />

                <Box
                    w={props.smallDevice
                    ? "60%"
                    : "90%"}>
                    <Header
                        children={subHeader.toUpperCase()}
                        as="h2"
                        size={props.smallDevice
                        ? "18px"
                        : "120px"}
                        textAlign="center"
                        color="#FFFF"
                        lineHeight="1.2"
                        letterSpacing="0"/>
                </Box>

            </VStack>

        </VStack>
    );
};

export default MainHeader