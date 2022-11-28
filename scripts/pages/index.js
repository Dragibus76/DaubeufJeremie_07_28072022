//arrays of items recipes
let ustensilsArray = [];
let applianceArray = [];
let ingredientsArray = [];
let resultRecipes = recipes;


function displayRecipes(recipes) {
    const listRecipesSection = document.getElementById('list-recette-section');
    listRecipesSection.innerHTML = "";
    if (recipes.length === 0) {
        listRecipesSection.innerText = "Vos Recherches ont rien données, essayez de chercher un ingrédient valide !";
    }

    //Display card in the result
    recipes.map((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        listRecipesSection.appendChild(recipeCardDOM);
    });
};



//Display all recipes for the begining
function init() {
    displayRecipes(recipes);
};

//init ellen page
init();