import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";
import Logo from "../ui/Logo";

interface IProps {
    children: React.ReactNode,
    isLast?: boolean,
    to: string
    // any other props that come into the component
}

const MenuItems = (props: IProps) => {
    const { children, isLast, to = "/" } = props
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
        >
            <Link to={to}>{children}</Link>
        </Text>
    )
};

const Header: React.FC = props => {
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            {...props}
        >
            <Flex align="center">
                <Logo />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <HamburgerIcon />}
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align={["center", "center", "center", "center"]}
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItems to="/">Inicio</MenuItems>
                    <MenuItems to="/sign-up">
                        <Button size="sm" rounded="md">
                            Registrarse
                        </Button>
                    </MenuItems>
                    <ColorModeSwitcher />
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header