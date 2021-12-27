import React from "react";
import "./NavLink.css"
import {HStack, Box} from "@chakra-ui/react";
import {Link} from "gatsby"

const NavLink = (props) => {
    const {href, children} = props;
    return (
        <Box className="nav-link">
            <Link to={href}>
                {children}
            </Link>
        </Box>
    )
}

export default NavLink