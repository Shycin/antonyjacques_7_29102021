class SearchClass {
    constructor() {
        this.currentFiltre = [];
        this.specificFiltre = "";
    }

    AddSearch(item) {
        if(this.currentFiltre.findIndex((element) => element.name === item.name))
            this.currentFiltre.push(item)
    }
}

export const AllSearch = new SearchClass();