import React from "react"
import {Flex, VStack, Box} from "@chakra-ui/react"
import Header from "../Typography/Header";
import LogoClip from "../../GifClip/LogoClip";
import SocialButtons from "../SocialButtons";
import FooterNav from "./FooterNav";

const Footer = () => {

    return (
        <VStack
            w="100vw"
            h="100vh"
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            pb="4"
            spacing="16"
            >

            <VStack justifyContent="center" alignItems="center" spacing="8">
            <Box w="400px" h="400px" className="logo-animation"/>
            <LogoClip />
                <Header
                    as="h3"
                    children="© 2021"
                    size="18px"
                    color="#FFFFFF"
                    lineHeight="1.2"
                    letterSpacing="0"/>

            </VStack>
            <SocialButtons/>
            <FooterNav/>

        </VStack>
    );
};

export default Footer