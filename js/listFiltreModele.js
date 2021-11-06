import { AllSearch } from '../class/searchClass.js';

export default function FilterList(title, label, listItem, color = 'primary') {
    const listContent = document.createElement('div')
    listContent.classList.add('CategoriesSearch__categorie', `bg-${color}`)



    const buttonOpen = document.createElement('button')
    buttonOpen.classList.add('CategoriesSearch__categorie__btn', `btn`, `toggleShow`)
    buttonOpen.onclick= function (this_, parent_ = null)
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

        Array.from(document.getElementsByClassName('searchFiltreItem')).forEach(element => {
            element.value = ''

            var keyboardEvent = document.createEvent('KeyboardEvent');
            var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';

            keyboardEvent[initMethod](
                'keyup', // event type: keydown, keyup, keypress
                true, // bubbles
                true, // cancelable
                window, // view: should be window
                false, // ctrlKey
                false, // altKey
                false, // shiftKey
                false, // metaKey
                40, // keyCode: unsigned long - the virtual key code, else 0
                0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
            );
            element.dispatchEvent(keyboardEvent);
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
    inputSearchBar.classList.add('searchFiltreItem')
    inputSearchBar.placeholder=label
    inputSearchBar.onkeyup= function (e) 
    {
        if(this.value.length > 0)
        {
            Array.from(document.getElementsByClassName('CategoriesSearch__list__elt')).forEach(element => {
                if(!element.innerHTML.toLowerCase().includes(this.value.toLowerCase()))
                {
                    element.classList.add('hidden')
                }
                else
                {
                    element.classList.remove('hidden')
                }
            });
        }
        else{
            Array.from(document.getElementsByClassName('CategoriesSearch__list__elt')).forEach(element => {
                element.classList.remove('hidden')
            });
        }
        
    }

    const chevron_up = document.createElement('span')
    chevron_up.classList.add('fas', 'fa-chevron-up')
    chevron_up.onclick= function (this_, parent_ = null)
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

    searchBar.append(inputSearchBar)
    searchBar.append(chevron_up)


    const list = document.createElement('ul')
    list.classList.add('CategoriesSearch__list', `bg-${color}`, `toggleShow`, `hidden`)
    listItem.forEach( (item, key) => {
        const itemInList = document.createElement('li')
        // itemInList.id=`order-${key}`
        const regex = /\'|\(|\)|\%/ig
        itemInList.id=item.ingredient.replaceAll(regex,' ').split(' ').join('-').toLowerCase()
        itemInList.classList.add('CategoriesSearch__list__elt', `bg-${color}`, item.ingredient.split(' ').join('-'))
        itemInList.onclick=AllSearch.AddSearch
        itemInList.innerHTML=item.ingredient

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


window.addEventListener('click', function(e){
    if(!e.target.closest(".selected") && document.getElementsByClassName('selected').length > 0)
    {
        const allToggle = document.getElementsByClassName('selected')[0].getElementsByClassName('toggleShow');
        document.getElementsByClassName('selected')[0].classList.toggle('selected')

        Array.from(allToggle).forEach(element => {
            element.classList.toggle('hidden')
        });


        Array.from(document.getElementsByClassName('searchFiltreItem')).forEach(element => {
            element.value = ''

            var keyboardEvent = document.createEvent('KeyboardEvent');
            var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';

            keyboardEvent[initMethod](
                'keyup', // event type: keydown, keyup, keypress
                true, // bubbles
                true, // cancelable
                window, // view: should be window
                false, // ctrlKey
                false, // altKey
                false, // shiftKey
                false, // metaKey
                40, // keyCode: unsigned long - the virtual key code, else 0
                0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
            );
            element.dispatchEvent(keyboardEvent);
        }); 
    }
})