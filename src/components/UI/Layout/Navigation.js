import React, { useContext} from "react";
import {HStack} from "@chakra-ui/react";
import {Link} from "gatsby"
import MenuColorContext from "../../../context/MenuColorContext";

const Navigation = (props) => {
    const {isLit, onToggleLight} = useContext(MenuColorContext)
    

    return (
        <HStack
            flexWrap="nowrap"
            spacing="1rem"
            as="nav"
            fontSize="14px"
            fontFamily="Oswald-Regular, sans serif !important"
            color={isLit
            ? "white"
            : "black"}>

            <Link to="/">
                SHOWOFF
            </Link>

            <Link to="/de">
                ANEWDAY
            </Link>

            <Link to="/de">
                CONTACT
            </Link>

        </HStack>

    )
}

export default Navigation