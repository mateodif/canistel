import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Input,
  InputGroup,
  InputRightElement,
  Center,
  Heading
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { RecipeCard } from "./components/RecipeCard"
import { SearchIcon } from "@chakra-ui/icons"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center>
          <Heading>Canistel</Heading>
        </Center>
        <Center p={4}>
          <InputGroup w="80vh" minW="80">
            <Input placeholder="Busca por receta, ingrediente, plato..." />
            <InputRightElement children={<SearchIcon />} />
          </InputGroup>
        </Center>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </Grid>
      </Grid>
    </Box>
  </ChakraProvider>
)
