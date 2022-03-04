import * as model from "./model.js";
import recipeViwe from "./viwes/recipeViwe.js";
import searchViwe from "./viwes/searchViwe.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

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

const controllSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchViwe.getQuery();
    if (!query) return;

    // 2) Load search result
    await model.loadSearchResults(query);

    // 3) Render results
    console.log(model.state);
  } catch (error) {
    console.error(error);
  }
};

const init = function () {
  //Subscriber  -> P-S pattern
  recipeViwe.addHandlerRender(controllRecipes);
  searchViwe.addHandlerSearch(controllSearchResults);
};
init();
