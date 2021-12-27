import React, {useContext} from "react";
import {HStack, Box} from "@chakra-ui/react";
import {Link} from "gatsby"
import MenuColorContext from "../../../context/MenuColorContext";
import NavLink from "./NavLink";

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

            <NavLink href="/showoff" children="SHOWOFF"/>
            <NavLink href="/" children="ANEWDAY"/>
            <NavLink href="/contact" children="CONTACT"/>



        </HStack>

    )
}

export default Navigation