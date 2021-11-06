import ActualSearch from '../js/actualSearchModele.js';
import { AllRecipes } from '../class/recipeClass.js';

class SearchClass {
    constructor() {
        this.currentFiltre = [];
        this.specificFiltre = "";

        document.getElementById('inputSearch').addEventListener('keyup', this.FiltreSpecificInsert)
    }


    FiltreSpecificInsert()
    {
        const prev = this.specificFiltre

        if(this.value.length >= 3)
        {  
            this.specificFiltre = this.value.toLowerCase()

            const item = {name: this.specificFiltre, class: ''}

            AllSearch.currentFiltre = AllSearch.currentFiltre.filter(function(el){
                return ((el.name===prev&&el.class==='') ? false : true)
            });
            
            AllSearch.currentFiltre.push(item)
            AllRecipes.MountedArrayRenderAdd(AllSearch.currentFiltre)
            AllSearch.HideItemNotCompatible()
            AllRecipes.RefreshRender()
        }
        else
        {
            this.specificFiltre = ""

            AllSearch.currentFiltre = AllSearch.currentFiltre.filter(function(el){
                return ((el.name===prev&&el.class==='') ? false : true)
            });
            AllRecipes.MountedArrayRenderRemove(AllSearch.currentFiltre)
            AllSearch.HideItemNotCompatible()
            AllRecipes.RefreshRender()
        }
    }



    RemoveSearch() {
        const name = document.getElementsByClassName('ItemsSearch__item__name')[0].innerHTML

        AllSearch.currentFiltre = AllSearch.currentFiltre.filter((element) => { return element.name !== name })
        AllRecipes.MountedArrayRenderRemove(AllSearch.currentFiltre)
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
            AllRecipes.MountedArrayRenderAdd(AllSearch.currentFiltre)
            AllSearch.RefreshRender(item.name)
        } 
    }


    HideItemNotCompatible()
    {
        Array.from(document.querySelectorAll('.currentDisallow')).forEach((el) => el.classList.remove('currentDisallow'));

        var tempArrayListFiltre = []
        AllRecipes.recipes.forEach( (recette) => {
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
                const regex = /\'|\(|\)|\%/ig
                Array.from(document.querySelectorAll('#'+item.ingredient.replaceAll(regex,' ').split(' ').join('-').toLowerCase())).forEach((el) => el.classList.add('currentDisallow'));
            } 
        })
    }

    RefreshRender(itemName)
    {  
        document.getElementsByClassName('ItemsSearch')[0].innerHTML = ''

        AllSearch.currentFiltre.forEach((item) => {
            if(item.class !== '')
            document.getElementsByClassName('ItemsSearch')[0].append(ActualSearch(item))
        })

        const regex = /\'|\(|\)|\%/ig
        // document.getElementById("#"+itemName.replaceAll(regex,' ').split(' ').join('-')).classList.toggle('currentActive')
        Array.from(document.querySelectorAll("#"+itemName.replaceAll(regex,' ').split(' ').join('-').toLowerCase())).forEach((el) => el.classList.toggle('currentActive'));
        

        this.HideItemNotCompatible()

        AllRecipes.RefreshRender()
    }



}

export const AllSearch = new SearchClass();