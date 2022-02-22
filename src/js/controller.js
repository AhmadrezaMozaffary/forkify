import * as model from "./model.js";
import recipeViwe from "./viwes/recipeViwe.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

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
    alert(err);
  }
};

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controllRecipes)
);
