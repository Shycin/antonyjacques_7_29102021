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

    getAll(array = null)
    {
        const all = this.ingredients.concat(this.ustensiles).concat(this.appareils)

        if(array)
        {
            var segment = []
            array.some(item => {  
                all.some( (el) => { 
                    if(el.ingredient.toLowerCase() === item.name.toLowerCase()) 
                        segment.push(el)
                })  
            })
            return segment
        }

        return all
    }

    SetFiltres(ListToParse) {

        const setter = (value, array) => {

            var indexExist = array.findIndex(item => item.ingredient === value.ingredient )

            if( indexExist >= 0 && (value.allow && value.allow.length > 0))
            {
                array[indexExist].allow = array[indexExist].allow.concat(value.allow)
                return array
            }

            return [...array, value];
        }

        ListToParse.forEach( (itemList) => {

            var elementLink = []

            itemList.ingredients.forEach(element => { elementLink.push(encodeURI(element.ingredient)) } )
            itemList.ustensils.forEach(element => { elementLink.push(encodeURI(element)) } )
            elementLink.push(encodeURI(itemList.appliance))


            itemList.ingredients.forEach(element => { this.ingredients = setter({ingredient: element.ingredient, allow: elementLink}, this.ingredients) } );
            itemList.ustensils.forEach(element => { this.ustensiles = setter({ingredient: element, allow: elementLink}, this.ustensiles) } );
            this.appareils = setter({ingredient: itemList.appliance, allow: elementLink}, this.appareils);

        })
    }


    ResetArrayRender()
    {
        this.recipes = recipes;
    }

    MountedArrayRender(arrayItem)
    {
        this.ResetArrayRender()

        if(arrayItem.length > 0)
        {
            const recipeFiltered = this.recipes.filter( (item) => {

                if(Array.isArray(arrayItem))
                    return arrayItem.every( (allItemToCompare) => {
                        if( JSON.stringify(item).toLocaleLowerCase().includes(allItemToCompare.name) )
                            return item
                    })
                else
                    if( JSON.stringify(item).toLocaleLowerCase().includes(arrayItem) )
                        return item
            })
    
            this.recipes = recipeFiltered
        }    
    }

    RefreshRender()
    {
        document.getElementsByClassName('ListCards')[0].innerHTML = ''
        this.recipes.forEach(element => {
            if(element.TokenRender !== false)
            document.getElementsByClassName('ListCards')[0].append(Card(element))
        });
    }
}

export const AllRecipes = new RecipeClass(recipes);