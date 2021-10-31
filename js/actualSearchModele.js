import { AllSearch } from '../class/searchClass.js';

export default function ActualSearch(item) {
    const listContent = document.createElement('div')
        listContent.classList = item.class
        listContent.classList.add('ItemsSearch__item')
        listContent.onclick = AllSearch.RemoveSearch


    const name = document.createElement('span')
        name.classList.add('ItemsSearch__item__name')
        name.innerHTML=item.name

    const icon = document.createElement('span')
        icon.classList.add('far', `fa-times-circle`)


    listContent.append(name)
    listContent.append(icon)

    return listContent
}