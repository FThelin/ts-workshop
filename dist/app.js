import { printPotions } from "./modules/printPotions.js";
import { printIngredients } from "./modules/printIngredients.js";
import { brewPotion } from "./modules/brewPotion.js";
printIngredients([]);
printPotions();
document.querySelector(".brew-button")?.addEventListener("click", brewPotion);
