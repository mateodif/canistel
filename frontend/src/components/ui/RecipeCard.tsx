// Sample card from Airbnb

import { StarIcon } from "@chakra-ui/icons"
import { Badge, Box, Image } from "@chakra-ui/react"
import React from "react"
export interface IRecipe {
  "id": number,
  "owner": {
    "id": number,
    "username": string,
    "email": string,
    "short_name": string,
    "last_name": string,
    "fullname": string
  },
  "title": string,
  "portions": number,
  "ingredient_servings": [
    {
      "quantity": number,
      "unit": {
        "name": string
      },
      "ingredient": {
        "name": string,
        "description": string
      },
      "description": string
    },
    {
      "quantity": number,
      "unit": {
        "name": string
      },
      "ingredient": {
        "name": string,
        "description": string
      },
      "description": string
    }
  ],
  "images": string[] | [],
}

const RecipeCard: React.FC<IRecipe> = (recipe) => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={recipe.images[0]} fallbackSrc={"https://tknk.io/82be"} alt={recipe.title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Nuevo
            </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {recipe.portions} porciones
            </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {recipe.title}
        </Box>

        <Box>
          {recipe.owner.fullname}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? "teal.500" : "gray.300"}
              />
            ))}
        </Box>
      </Box>
    </Box>
  )
}

export default RecipeCard;