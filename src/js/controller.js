import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const controllRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update result view and mark with ACTIVE class
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks)

    // 1) Loading Recipe
    await model.loadRecipe(id); // returns Promise

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controllSearchResults = async function () {
  try {
    // 0)
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search result
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination button(s)
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(error);
  }
};

const controllPagination = function (gotoPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // 2) Render NEW initial pagination button(s)
  paginationView.render(model.state.search);
};

const controllServings = function (newServings) {
  // Update recipe serving (in state)
  model.updateServings(newServings);

  // Update the recipe view & Rendering Recipe
  recipeView.update(model.state.recipe);
};

const controllAddBookmark = function () {
  // 1) ADD/REMOVE bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmark
  bookmarksView.render(model.state.bookmarks)
};

const init = function () {
  //Subscriber  -> P-S pattern
  recipeView.addHandlerRender(controllRecipes);
  recipeView.addHandlerUpdateServings(controllServings);
  recipeView.addHandlerAddBookmark(controllAddBookmark);
  searchView.addHandlerSearch(controllSearchResults);
  paginationView.addHandlerClick(controllPagination);
};
init();
