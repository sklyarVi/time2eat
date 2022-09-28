import { useState, useEffect } from "react"
import { Recipe } from "./Recipes"
import { RecipeForm } from '../Recipes/RecipeForm'
import { IRecipe } from "../types/data"
import axios from 'axios';

export const RecipeList = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [isUpdate, setUpdate] = useState<boolean>(false)

    useEffect(() => {
        getRecipes()
        setUpdate(false)
    }, [isUpdate])

    const getRecipes = async () => {
        try {
            const response = await axios
                .get('http://localhost:3000/api/v1/recipes')

            const data = response.data

            setRecipes(data.reverse())

        } catch(error: any) {
            console.log(error)
        }
    }

    const updateRecipeList = (recipe: IRecipe) => {
        let _recipes = recipes;
        _recipes.unshift(recipe);
        setRecipes(_recipes);

        setUpdate(true)
    }

    return (
        <>
            <RecipeForm updateRecipeList={updateRecipeList} />

            <h1>Recipe List</h1>
            {recipes.map((post: IRecipe) => (
                <Recipe
                    key={post.id}
                    title={post.title}
                    description={post.description}
                />
            ))}
        </>
    )
}
