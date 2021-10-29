import React from "react"
import {VStack, Box} from "@chakra-ui/react"
import Header from "../UI/Typography/Header";

const MainHeader = (props) => {
    const header = "A new day"
    const subHeader = "A Berlin based creative studio with a thing for brand design";

    return (
        <VStack
            background="linear-gradient(180deg, rgba(0,0,0,0) 40%, #0F0F0F  60%)"
            pb="15rem">

            <VStack zIndex="999" justifyContent="center" alignItems="center">
                <Box w="100%" h="calc(100vh - 260px)"/>

                <Header
                    children={header.toUpperCase()}
                    as="h1"
                    textAlign="center"
                    className="gradient-animation hero-header"/>

                <Box className="sub-header-box">
                    <Header
                        children={subHeader.toUpperCase()}
                        as="h2"
                        textAlign="center"
                        color="#FFFF"
                        lineHeight="1.2"
                        letterSpacing="0"
                        className="hero-sub-header"/>
                </Box>

            </VStack>

        </VStack>
    );
};

export default MainHeader