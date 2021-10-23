import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import Navigation from "./Navigation";
import ColorStore from "../../../context/ColorStore";

const Layout = ({children}) => (
    <ColorStore>

        <Flex direction="column" justifyContent="center" alignItems="center">
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

        </Flex>
    </ColorStore>
)

export {Layout}