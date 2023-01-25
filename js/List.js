class List {
    constructor() {
        this.all = [];
        this.ingredients = [];
        this.ingredientsSelected = [];
        this.appliances = [];
        this.appliancesSelected = [];
        this.ustensils = [];
        this.ustensilsSelected = [];
        this.alltagsSelected = [];
        this.search = " ";
    }

    // RECUPERATION DES RECETTES

    // ajoute dans l'objet "list" la recette du tableau "all"
    add(recipe) {
        List.all.push(recipe)
    }

    // Affiche la liste des recettes dans le main
    displayRecipes() {
        // Pour chaque index du tableau , recipe sera un objet de recette filtré et dans l'html ajoute la méthode render qui est dans l'objet recipe
        let html = "";
        for (let i = 0; i < this.filtered.length; i++) {
            let recipe = new Recipe(this.filtered[i]);
            html += recipe.render();
        }
        document.querySelector("main").innerHTML = html;
    }
}