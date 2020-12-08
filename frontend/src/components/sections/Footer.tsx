import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";


const Footer: React.FC = props => (
    <Flex
        as="nav"
        justify="space-between"
        w="100%"
        mb={8}
        p={8}
        {...props}
    >

        <Box
            display="block"
            flexBasis={{ base: "100%", md: "auto" }}
        />
    </Flex>
)

export default Footer;