import { potions } from "../data.ts";

const hintContainer = document.querySelector(".hints") as HTMLDivElement;

export const printPotions = () => {
  const potionsContainer = document.querySelector(".potions") as HTMLDivElement;

  let id = 1;
  for (const potion of potions) {
    const imageContainer = document.createElement("div") as HTMLDivElement;
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

const showHint = (hint: string) => {
  hintContainer.innerHTML = "";
  hintContainer.textContent = hint;
};

const hideHint = () => {
  hintContainer.textContent = "Hover potion to see hint!";
};
