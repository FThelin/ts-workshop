import { IRecipie, potions, recipes } from "../data.ts";
import { selectedIngredients } from "./addIngredient.ts";

export const brewPotion = () => {
  if (
    selectedIngredients.length === 2 &&
    selectedIngredients[0] &&
    selectedIngredients[1]
  ) {
    for (const recipie of recipes) {
      if (
        recipie.ingredients.includes(selectedIngredients[0]) &&
        recipie.ingredients.includes(selectedIngredients[1])
      ) {
        foundPotion(recipie);
        return;
      }
    }
  }
  alert("no potion created");
};

const foundPotion = (recipie: IRecipie) => {
  const potion = potions.find((p) => (p.id = recipie.result));
  if (potion) {
    const potionImages = document.querySelectorAll(".potions > div");
    const images = [...potionImages];
    const correctImage = images.find(
      (img) => img.id === potion.id,
    ) as HTMLDivElement;
    if (correctImage) {
      correctImage.style.opacity = "1";
    }
  }
};
