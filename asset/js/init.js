import { DATA } from './../../data/dataHandler.js'
import { InputMainListener } from './../../asset/js/components/inputMainHandler.js';
import { dropDownIngredientsListener } from "./../../asset/js/components/dropdownHandlerIngredients.js";
import { displayDropdown, displayRecipes, tagObserver } from './utils/tools.js';

const init = () => {

    displayRecipes(DATA);
    displayDropdown()
    InputMainListener()
    dropDownIngredientsListener()
    tagObserver()
}

export default init