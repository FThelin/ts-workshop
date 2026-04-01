import { ingredients } from "../data.js";
import { addIngredient } from "./addIngredient.js";
export const printIngredients = (potionsDone) => {
    const ingredientContainer = document.querySelector(".ingredients-cards");
    const randomIngredients = [...ingredients].sort(() => Math.random() - 0.5);
    for (const ingredient of randomIngredients) {
        const card = createIngredientCard(ingredient);
        card.addEventListener("click", () => addIngredient(ingredient));
        ingredientContainer.appendChild(card);
    }
};
const getElementData = (element) => {
    switch (element) {
        case "fire":
            return { emoji: "🔥", bgColor: "#f67717", color: "#ffd9bb" };
        case "air":
            return { emoji: "💨", bgColor: "#32c4f0", color: "#134959" };
        case "earth":
            return { emoji: "🪨", bgColor: "#ecb46b", color: "#683e2d" };
        case "water":
            return { emoji: "💦", bgColor: "#2e5cab", color: "#b4d0ff" };
    }
};
export const createIngredientCard = (ingredient) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const { emoji, bgColor, color } = getElementData(ingredient.element);
    card.style.backgroundColor = bgColor;
    card.style.color = color;
    card.style.border = `2px solid ${color}`;
    card.textContent = `${ingredient.name} ${emoji}`;
    return card;
};
