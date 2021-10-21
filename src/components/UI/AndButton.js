import React from "react"
import {Box} from "@chakra-ui/react"

const AndButton = (props) => {
    return (
        <Box
            as="button"
            padding="25px 50px"
            borderRadius="45px"
            fontFamily="Oswald, sans serif"
            fontSize="18px"
            fontWeight="400"
            bg={props.bg}
            border="none"
            color="black"
            _focus={{
        outline: "none"

        }}>
            {props.text}
        </Box>
    )
}

export default AndButton