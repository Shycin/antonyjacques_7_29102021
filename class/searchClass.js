import ActualSearch from '../js/actualSearchModele.js';

class SearchClass {
    constructor() {
        this.currentFiltre = [];
        this.specificFiltre = "";
    }

    RemoveSearch() {
        const name = this.getElementsByClassName('ItemsSearch__item__name')[0].innerHTML

        AllSearch.currentFiltre = AllSearch.currentFiltre.filter((element) => { return element.name !== name })

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
            AllSearch.RefreshRender(item.name)
        } 

        
    }

    RefreshRender(itemName)
    {
        document.getElementsByClassName('ItemsSearch')[0].innerHTML = ''

        // Array.from(document.getElementsByClassName('.currentActive')).forEach(element => {
        //     element.classList.toggle('currentActive')
        // });

        AllSearch.currentFiltre.forEach((item) => {
            document.getElementsByClassName('ItemsSearch')[0].append(ActualSearch(item))
        })
        document.getElementById(itemName.split(' ').join('-')).classList.toggle('currentActive')
    }
}

export const AllSearch = new SearchClass();