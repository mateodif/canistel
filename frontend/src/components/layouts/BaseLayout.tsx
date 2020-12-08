import { Flex } from "@chakra-ui/react";
import * as React from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";


interface IProps {
    children: React.ReactNode;
    // any other props that come into the component
}

const BaseLayout = ({ children, ...props }: IProps) => (
    <>
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            minH="100%"
            m="0 auto"
            {...props}
        >
            <Header />
            {children}
        </Flex>
        <Footer />
    </>
);

export default BaseLayout;
