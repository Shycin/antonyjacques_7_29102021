import { recipes } from '../Data/recipe.js'
import Card from '../js/cardModele.js';

class RecipeClass {
    constructor(recipes) {
        this.recipes = recipes;

        this.ingredients = [];
        this.ustensiles = [];
        this.appareils = [];

        this.SetFiltres(this.recipes);
    }


    getIngredients()
    {
        return this.ingredients;
    }

    getUstensiles()
    {
        return this.ustensiles;
    }

    getAppareils()
    {
        return this.appareils;
    }

    SetFiltres(ListToParse) {
        ListToParse.forEach( (itemList) => {
            const setter = (value, array) => {
                if( array && !array.includes(value))
                    return [...array, value];
                
                return array;
            }

            itemList.ingredients.forEach(element => { this.ingredients = setter(element.ingredient, this.ingredients) } );
            itemList.ustensils.forEach(element => { this.ustensiles = setter(element, this.ustensiles) } );
            this.appareils = setter(itemList.appliance, this.appareils);
        })
    }

    RefreshRender()
    {
        AllRecipes.recipes.forEach(element => {
            document.getElementsByClassName('ListCards')[0].append(Card(element))
        });
    }
}

export const AllRecipes = new RecipeClass(recipes);