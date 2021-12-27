import React from "react";
import {FaSoundcloud} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {Flex} from "@chakra-ui/layout";
import {IconContext} from "react-icons"

const SocialButtons = () => {

    return (
        <IconContext.Provider
            value={{
            color: "white",
            size: "1.5em"
        }}>

            <Flex w="80vw" maxW="300px" justifyContent="space-between">
                <a href="https://www.instagram.com/anewday_studio/"><BsInstagram/></a>
                <a href="https://twitter.com/anewday_studio/"><BsTwitter/></a>
                <a href="https://soundcloud.com/anewday_studio"><FaSoundcloud/></a>
                <a href="https://www.youtube.com/channel/UC--fIbfVaUlpGhL-0EdCl-w"><BsYoutube/></a>
            </Flex>
        </IconContext.Provider>

    )
}

export default SocialButtons
