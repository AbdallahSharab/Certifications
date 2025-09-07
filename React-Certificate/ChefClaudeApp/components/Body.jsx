import React from "react"
import IngredientsList from "/components/IngredientsList.jsx"
import ClaudeRecipe from "/components/ClaudeRecipe.jsx"
import { getRecipeFromChefClaude } from "../src/ai.js"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        console.log(typeof(newIngredient))
        if (newIngredient.trim() !== "") {
           setIngredients(prevIngredients => [...prevIngredients, newIngredient]) 
        } else {
            alert("Invalid Ingredient!")
        }
    }

    return (
        <main>
            <p id="website-description">Enter a minimum of 4 ingredients and get some delicious ideas for recipes!!</p>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. chicken breast"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}