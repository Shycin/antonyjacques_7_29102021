export default function FilterList(title, label, listItem, color = 'primary') {
    const listContent = document.createElement('div')
    listContent.classList.add('CategoriesSearch__categorie', `bg-${color}`)



    const buttonOpen = document.createElement('button')
    buttonOpen.classList.add('CategoriesSearch__categorie__btn', `btn`, `toggleShow`)
    buttonOpen.onclick= function (this_, parent_ = null)
    {
        console.log(this)
        var parent = parent_;
    
        if(!parent_)
            parent = this.parentNode;
    
        if(!parent.classList.contains('selected') && document.getElementsByClassName('selected').length > 0)
            showItem(document.getElementsByClassName('selected')[0],document.getElementsByClassName('selected')[0])
    
        parent.classList.toggle('selected')
    
        const allToggle = parent.getElementsByClassName('toggleShow');
    
        Array.from(allToggle).forEach(element => {
            element.classList.toggle('hidden')
        });
    }

    const spanButton = document.createElement('span')
    spanButton.classList.add('CategoriesSearch__categorie__btn__text')
    spanButton.innerHTML = title

    const chevron_down= document.createElement('span')
    chevron_down.classList.add('fas', 'fa-chevron-down')

    buttonOpen.append(spanButton)
    buttonOpen.append(chevron_down)



    const searchBar = document.createElement('div')
    searchBar.classList.add('CategoriesSearch__categorie__SearchBar', 'toggleShow', 'hidden')

    const inputSearchBar = document.createElement('input')
    inputSearchBar.placeholder=label

    const chevron_up = document.createElement('span')
    chevron_up.classList.add('fas', 'fa-chevron-up')
    chevron_up.onclick= function (this_, parent_ = null)
    {
        console.log(this)
        var parent = parent_;
    
        if(!parent_)
            parent = this.parentNode;
    
        if(!parent.classList.contains('selected') && document.getElementsByClassName('selected').length > 0)
            showItem(document.getElementsByClassName('selected')[0],document.getElementsByClassName('selected')[0])
    
        parent.classList.toggle('selected')
    
        const allToggle = parent.getElementsByClassName('toggleShow');
    
        Array.from(allToggle).forEach(element => {
            element.classList.toggle('hidden')
        });
    }

    searchBar.append(inputSearchBar)
    searchBar.append(chevron_up)


    const list = document.createElement('ul')
    list.classList.add('CategoriesSearch__list', `bg-${color}`, `toggleShow`, `hidden`)
    listItem.forEach( (item, key) => {
        const itemInList = document.createElement('li')
        itemInList.id=`order-${key}`
        itemInList.classList.add('CategoriesSearch__list__elt')
        itemInList.onclick=""
        itemInList.innerHTML=item

        list.append(itemInList)
    })



    listContent.append(buttonOpen)
    listContent.append(searchBar)
    listContent.append(list)

    return listContent
}

function showItem(this_, parent_ = null)
{
    var parent = parent_;

    if(!parent_)
        parent = this.parentNode;

    if(!parent.classList.contains('selected') && document.getElementsByClassName('selected').length > 0)
        showItem(document.getElementsByClassName('selected')[0],document.getElementsByClassName('selected')[0])

    parent.classList.toggle('selected')

    const allToggle = parent.getElementsByClassName('toggleShow');

    Array.from(allToggle).forEach(element => {
        element.classList.toggle('hidden')
    });
}