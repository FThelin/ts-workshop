import { potions } from "../data.js";
export const printPotions = () => {
    const hintsContainer = document.querySelector(".hints");
    for (const potion of potions) {
        const hintItem = document.createElement("li");
        hintItem.textContent = potion.hint;
        hintsContainer.appendChild(hintItem);
    }
};
