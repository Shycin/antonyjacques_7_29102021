import { AllRecipes } from '../class/recipeClass.js';
import { AllSearch } from '../class/searchClass.js';
import FilterList from './listFiltreModele.js';
import Card from './cardModele.js';

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


    AllRecipes.recipes.forEach(element => {
        document.getElementsByClassName('ListCards')[0].append(Card(element))
    });


  /*  const elementClone = filtreLocation.getElementsByClassName('CategoriesSearch__categorie')[0];

    const ElementIngredients = elementClone.cloneNode(true);
    const ElementUstensiles = elementClone.cloneNode(true);
    const ElementAppareils = elementClone.cloneNode(true);

    ElementIngredients.className = ElementIngredients.className + " bg-primary";
        ElementIngredients.getElementsByClassName('CategoriesSearch__categorie__btn__text')[0].innerHTML = 'Ingrédients';
        ElementIngredients.getElementsByClassName('CategoriesSearch__list')[0].className = ElementIngredients.getElementsByClassName('CategoriesSearch__list')[0].className + " bg-primary";
        ElementIngredients.querySelectorAll('.CategoriesSearch__categorie__SearchBar input')[0].placeholder += 'ingrédient';

    ElementAppareils.className = ElementAppareils.className + " bg-lime";
        ElementAppareils.getElementsByClassName('CategoriesSearch__categorie__btn__text')[0].innerHTML = 'Appareils';
        ElementAppareils.getElementsByClassName('CategoriesSearch__list')[0].className = ElementAppareils.getElementsByClassName('CategoriesSearch__list')[0].className + " bg-lime";
        ElementAppareils.querySelectorAll('.CategoriesSearch__categorie__SearchBar input')[0].placeholder += 'appareil';

    ElementUstensiles.className = ElementUstensiles.className + " bg-blood";
        ElementUstensiles.getElementsByClassName('CategoriesSearch__categorie__btn__text')[0].innerHTML = 'Ustensiles';
        ElementUstensiles.getElementsByClassName('CategoriesSearch__list')[0].className = ElementUstensiles.getElementsByClassName('CategoriesSearch__list')[0].className + " bg-blood";
        ElementUstensiles.querySelectorAll('.CategoriesSearch__categorie__SearchBar input')[0].placeholder += 'ustensile';

    AllRecipes.getIngredients().forEach(element => {
        // ElementIngredients.getElementsByClassName('CategoriesSearch__categorie__btn__text')[0].innerHTML = element;
    });
*/
    

   /* filtreLocation.innerHTML = '';
    filtreLocation.append(ElementIngredients);
    filtreLocation.append(ElementAppareils);
    filtreLocation.append(ElementUstensiles);*/
    
}

/*var newcontent = document.createElement('div');
    newcontent.className  = "bar";

    while (newcontent.firstChild) {
        mydiv.appendChild(newcontent.firstChild);
    }
    */