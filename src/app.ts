import { printPotions } from "./modules/printPotions.ts";
import { printIngredients } from "./modules/printIngredients.ts";
import { brewPotion } from "./modules/brewPotion.ts";

printIngredients([]);
printPotions();

document.querySelector(".brew-button")?.addEventListener("click", brewPotion);
