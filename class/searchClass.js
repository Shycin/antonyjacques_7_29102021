import ActualSearch from '../js/actualSearchModele.js';
import { AllRecipes } from '../class/recipeClass.js';

class SearchClass {
    constructor() {
        this.currentFiltre = [];
        this.specificFiltre = "";
    }

    RemoveSearch() {
        const name = this.getElementsByClassName('ItemsSearch__item__name')[0].innerHTML

        AllSearch.currentFiltre = AllSearch.currentFiltre.filter((element) => { return element.name !== name })
        AllRecipes.MountedArrayRender(AllSearch.currentFiltre)
        AllSearch.RefreshRender(name)
    }

    AddSearch() {
        const name = this.innerHTML.toLowerCase()

        const regex = /bg-(\w+)/g;
        const found = this.classList.value.match(regex);

        const classItem = found

        const item = {name: name, class: classItem}

        if(AllSearch.currentFiltre.findIndex((element) => element.name === item.name) < 0)
        {
            AllSearch.currentFiltre.push(item)
            AllRecipes.MountedArrayRender(AllSearch.currentFiltre)
            AllSearch.RefreshRender(item.name)
        } 
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
    }


    HideItemNotCompatible()
    {
        Array.from(document.querySelectorAll('.currentDisallow')).forEach((el) => el.classList.remove('currentDisallow'));

        var tempArrayListFiltre = []
        AllRecipes.recipes.forEach( (recette) => {
<<<<<<< Updated upstream
console.log(recette)
=======

>>>>>>> Stashed changes
            AllRecipes.getAll().forEach( (item) => {

                if(JSON.stringify(recette).toLowerCase().includes(item.ingredient.toLowerCase()))
                {
                    tempArrayListFiltre.push(item.ingredient.toLowerCase())
                }
            })

        })


        AllRecipes.getAll().forEach( (item)=> {
            if(tempArrayListFiltre.indexOf(item.ingredient.toLowerCase()) === -1)
            {
<<<<<<< Updated upstream
                console.log(item.ingredient)
                Array.from(document.querySelectorAll('#'+item.ingredient.split(' ').join('-').toLowerCase())).forEach((el) => el.classList.add('currentDisallow'));
            } 
        })

=======
                const regex = /\'|\(|\)|\%/ig
                Array.from(document.querySelectorAll('#'+item.ingredient.replaceAll(regex,' ').split(' ').join('-').toLowerCase())).forEach((el) => el.classList.add('currentDisallow'));
            } 
        })

>>>>>>> Stashed changes
>>>>>>> Stashed changes



        /*var currentAllowed = []


        AllRecipes.getAll(AllSearch.currentFiltre).forEach( (item)=> {
            const tempCurrentAllowed = []

            console.log("current",JSON.stringify(currentAllowed).toLowerCase())
            console.log("compare",JSON.stringify(item.allow).toLowerCase())
            item.allow.forEach(  (element)=> 
            {
                if
                (
                    !tempCurrentAllowed.includes(element.toLowerCase()) &&
                    (
                        currentAllowed.length === 0 ||
                        JSON.stringify(currentAllowed).toLowerCase().includes(element.toLowerCase())
                    )
                )
                {
                    tempCurrentAllowed.push(element.toLowerCase())
                    console.log(currentAllowed.length,element.toLowerCase())
                }
            })
            console.log('---------')
            currentAllowed = tempCurrentAllowed
        })

        console.log("What return current",currentAllowed)

        AllRecipes.getAll().forEach( (item)=> {
            AllRecipes.getAll(AllSearch.currentFiltre).forEach( (item2)=> {


              //console.log(currentAllowed.includes(item.ingredient.toLowerCase()),item.ingredient.toLowerCase())
                if(currentAllowed.length > 0 && currentAllowed.includes(item.ingredient.toLowerCase()))
                {
                    return
                   
                }
                if(item2.allow.indexOf(item.ingredient) === -1)
                {
                    document.getElementById(item.ingredient.split(' ').join('-').toLowerCase()).classList.add('currentDisallow')
                } 
            })
        })*/
    }

    RefreshRender(itemName)
    {  
        document.getElementsByClassName('ItemsSearch')[0].innerHTML = ''

        AllSearch.currentFiltre.forEach((item) => {
            document.getElementsByClassName('ItemsSearch')[0].append(ActualSearch(item))
        })
<<<<<<< Updated upstream
        document.getElementById(itemName.split(' ').join('-')).classList.toggle('currentActive')
    
<<<<<<< Updated upstream

        this.HideItemNotCompatible()

=======
=======
        const regex = /\'|\(|\)|\%/ig
        console.log("#"+itemName.replaceAll(regex,' ').split(' ').join('-'))
        // document.getElementById("#"+itemName.replaceAll(regex,' ').split(' ').join('-')).classList.toggle('currentActive')
        Array.from(document.querySelectorAll("#"+itemName.replaceAll(regex,' ').split(' ').join('-').toLowerCase())).forEach((el) => el.classList.toggle('currentActive'));
        

        this.HideItemNotCompatible()

>>>>>>> Stashed changes
>>>>>>> Stashed changes
        AllRecipes.RefreshRender()
    }
}

export const AllSearch = new SearchClass();