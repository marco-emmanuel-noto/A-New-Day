import React from "react";
import {HStack} from "@chakra-ui/react";
import {Link} from "gatsby"

const FooterNav = (props) => {

    return (
        <HStack
            flexWrap="nowrap"
            spacing="1rem"
            as="nav"
            fontSize="16px"
            fontFamily="Oswald, Sans-Serif !important"
            color="white"
            pt="4rem"
            pb="2rem">

            <Link to="/">
                IMPRINT
            </Link>

            <Link to="/de">
                PRIVACY
            </Link>

        </HStack>

    )
}

export default FooterNav