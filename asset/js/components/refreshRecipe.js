import { DATA } from "../../../data/dataHandler.js"
import { displayRecipes } from "../utils/tools.js"

export const refresh = () => {
    DATA.forEach(recipe => { recipe.display = true });

    const tagsIng = document.querySelectorAll(".tagIngredients")
   

    if (tagsIng !== null) {
        tagsIng.forEach(tag => {
            for (let i = 0; i < DATA.length; i++) {
                const recipe = DATA[i]

                // on va vérifier chaque ingrédient des recettes qui sont déjà affichée/sélèctionnée
                for (let j = 0; j < recipe.ingredients.length; j++) {
                    const ingredient = recipe.ingredients[j]
                    if (ingredient.ingredient.toLowerCase().includes(tag.children[0].textContent.toLowerCase())) {
                        recipe.display = true
                        break
                    } else {
                        recipe.display = false
                    }
                }
            }
        });
    }

    displayRecipes(DATA)
}