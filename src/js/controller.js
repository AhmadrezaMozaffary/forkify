import * as model from "./model.js";
import recipeViwe from "./viwes/recipeViwe.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

//const recipeContainer = document.querySelector(".recipe");

///////////////////////////////////////

const controllRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 0) Render spinner
    recipeViwe.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id); // returns Promise

    // 2) Rendering Recipe
    recipeViwe.render(model.state.recipe);
  } catch (err) {
    recipeViwe.renderError();
  }
};

const init = function () {
  //Subscriber  -> P-S pattern
  recipeViwe.addHandlerRender(controllRecipes);
};
init();
