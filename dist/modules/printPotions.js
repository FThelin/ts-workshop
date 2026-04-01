import { potions } from "../data.js";
const hintContainer = document.querySelector(".hints");
export const printPotions = () => {
    const potionsContainer = document.querySelector(".potions");
    let id = 1;
    for (const potion of potions) {
        const imageContainer = document.createElement("div");
        const image = document.createElement("img");
        image.src = `./public/${potion.image}`;
        imageContainer.appendChild(image);
        potionsContainer.appendChild(imageContainer);
        imageContainer.id = `pot_${id}`;
        id++;
        imageContainer.addEventListener("mouseover", () => showHint(potion.hint));
        imageContainer.addEventListener("mouseleave", hideHint);
    }
};
const showHint = (hint) => {
    hintContainer.innerHTML = "";
    hintContainer.textContent = hint;
};
const hideHint = () => {
    hintContainer.textContent = "Hover potion to see hint!";
};
