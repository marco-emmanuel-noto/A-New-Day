import React from "react"
import {VStack} from "@chakra-ui/react"
import Header from "../UI/Typography/Header";
import GifClip from "../GifClip/GifClip";

const MainHeader = () => {
    const header = "A new day"
    const subHeader = "A Berlin based creative studio with a thing for brand design";

    return (
        <VStack
            background="linear-gradient(180deg, rgba(0,0,0,0) 0%, #0F0F0F  40%)"
            pb="15rem">

            <VStack zIndex="999" justifyContent="center" alignItems="center">
                <GifClip>

                    <Header
                        children={header.toUpperCase()}
                        as="h1"
                        size="260px"
                        textAlign="center"/>
                </GifClip>
                <Header
                    children={subHeader.toUpperCase()}
                    as="h2"
                    size="120px"
                    textAlign="center"
                    color="#FFFF"/>

            </VStack>

        </VStack>
    );
};

export default MainHeader