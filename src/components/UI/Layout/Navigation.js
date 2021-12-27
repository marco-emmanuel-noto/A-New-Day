import React, {useContext} from "react";
import {HStack, Box} from "@chakra-ui/react";
import {Link} from "gatsby"
import MenuColorContext from "../../../context/MenuColorContext";

const Navigation = (props) => {
    const {isLit, onToggleLight} = useContext(MenuColorContext)

    const color = isLit
        ? "white"
        : "black"

    return (
        <HStack
            flexWrap="nowrap"
            spacing="1rem"
            as="nav"
            fontSize="18px"
            fontFamily="Oswald, Sans-Serif !important"
            color={color}>

            <Link to="/">
                SHOWOFF
            </Link>

            <Box borderBottom={`2px solid ${color}`}>
                <Link to="/de">
                    ANEWDAY
                </Link>
            </Box>

            <Link to="/de">
                CONTACT
            </Link>

        </HStack>

    )
}

export default Navigation