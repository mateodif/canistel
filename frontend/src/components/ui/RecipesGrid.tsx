// Sample card from Airbnb

import { Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react"
import RecipeCard, { IRecipe } from "./RecipeCard";

export interface RecipeProps { }

const RecipesGrid: React.FC<RecipeProps> = (props) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])

    const getRecipes = async () => {
        let response = await fetch("http://127.0.0.1:8000/recipes.json");
        let recipes = await response.json();
        setRecipes(recipes);
    }

    useEffect(() => { getRecipes(); }, [])

    return (
        <Stack direction={["column", "row"]} spacing="2rem">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </Stack>
    )
}

export default RecipesGrid;