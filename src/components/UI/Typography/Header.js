import React from "react";
import {Heading} from "@chakra-ui/react";

const Header = (props) => {
    return (<Heading
        children={props.children}
        as={props.as}
        // fontFamily="Oswald, sans-serif !important"
        fontSize={props.size}
        fontWeight="400"
        letterSpacing="-2px"
        textAlign={props.textAlign || "center"}
        lineHeight={props.lineHeight || 1}
        color={props.color}
        letterSpacing={props.letterSpacing || "-2px"}
        className={props.className}
        />)
}

export default Header