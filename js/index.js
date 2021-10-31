import { AllRecipes } from '../class/recipeClass.js';
import { AllSearch } from '../class/searchClass.js';
import FilterList from './listFiltreModele.js';

window.addEventListener(`DOMContentLoaded`, initializer);

var searchLocation = null;
var filtreLocation = null;

function initializer() {

    searchLocation = document.getElementsByClassName('ItemsSearch')[0];
    filtreLocation = document.getElementsByClassName('CategoriesSearch')[0];

    initFiltreExist();
}



function initFiltreExist()
{
    document.getElementsByClassName('CategoriesSearch')[0].append(FilterList("Ingrédients", "Rechercher un ingrédient", AllRecipes.getIngredients()))
    document.getElementsByClassName('CategoriesSearch')[0].append(FilterList("Appareils", "Rechercher un appareil", AllRecipes.getAppareils(), 'lime' ))
    document.getElementsByClassName('CategoriesSearch')[0].append(FilterList("Ustensiles", "Rechercher un ustensile", AllRecipes.getUstensiles(), 'blood'))


    AllRecipes.RefreshRender()
}