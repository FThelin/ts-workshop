import { IIngredient } from "../data.ts";
import { createIngredientCard } from "./printIngredients.ts";

const selectedIngredientsContainer = document.querySelector(
  ".selected-ingredients",
) as HTMLDivElement;

export let selectedIngredients: string[] = [];

let isAllowedToAddIngredient = true;

export const addIngredient = (ingredient: IIngredient) => {
  if (isAllowedToAddIngredient) {
    selectedIngredients.push(ingredient.id);
    const ingredientCard = createIngredientCard(ingredient);
    selectedIngredientsContainer.appendChild(ingredientCard);
  }
  checkAmountOfIngredients();
};

export const checkAmountOfIngredients = () => {
  const brewButton = document.querySelector(
    ".brew-button",
  ) as HTMLButtonElement;
  if (selectedIngredientsContainer.children.length === 2) {
    brewButton.disabled = false;
    isAllowedToAddIngredient = false;
  } else {
    brewButton.disabled = true;
    isAllowedToAddIngredient = true;
  }
};

document.querySelector(".clear-button")?.addEventListener("click", () => {
  selectedIngredientsContainer.innerHTML = "";
  selectedIngredients = [];
});
