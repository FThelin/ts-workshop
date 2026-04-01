import { createIngredientCard } from "./printIngredients.js";
const selectedIngredientsContainer = document.querySelector(".selected-ingredients");
export let selectedIngredients = [];
let isAllowedToAddIngredient = true;
export const addIngredient = (ingredient) => {
    if (isAllowedToAddIngredient) {
        selectedIngredients.push(ingredient.id);
        const ingredientCard = createIngredientCard(ingredient);
        selectedIngredientsContainer.appendChild(ingredientCard);
    }
    checkAmountOfIngredients();
};
export const checkAmountOfIngredients = () => {
    const brewButton = document.querySelector(".brew-button");
    if (selectedIngredientsContainer.children.length === 2) {
        brewButton.disabled = false;
        isAllowedToAddIngredient = false;
    }
    else {
        brewButton.disabled = true;
        isAllowedToAddIngredient = true;
    }
};
document.querySelector(".clear-button")?.addEventListener("click", () => {
    selectedIngredientsContainer.innerHTML = "";
    selectedIngredients = [];
});
