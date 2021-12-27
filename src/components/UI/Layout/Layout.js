import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import Navigation from "./Navigation";
import ColorStore from "../../../context/ColorStore";
import Footer from "./Footer";
import VideoStore from "../../../context/VideoStore";

const Layout = ({children}) => (
    <ColorStore>
        <VideoStore>

            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                bg="#0F0D0F">
                <Flex
                    w="15rem"
                    h="10%"
                    position="fixed"
                    top="0"
                    as="header"
                    zIndex="99999999"
                    justifyContent="center"
                    alignItems="flex-end">
                    <Navigation/>
                </Flex>

                <Box as="main">{children}</Box>
                <Box bg="#0F0F0F" as="footer" zIndex="99999"><Footer/></Box>

            </Flex>
        </VideoStore>
    </ColorStore>
)

export {Layout}