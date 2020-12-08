import { SearchIcon } from "@chakra-ui/icons";
import { Container, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import * as React from "react";
import RecipesGrid from "../components/ui/RecipesGrid";

interface IHomeProps { }

const Home: React.FC<IHomeProps> = props => {
    return (
        <>
            <Container maxW="lg" p={10} centerContent>
                <InputGroup>
                    <Input placeholder="Busca por receta, ingrediente, plato..." />
                    <InputRightElement children={<SearchIcon />} />
                </InputGroup>
            </Container>
            <RecipesGrid />
        </>
    )
}

export default Home;