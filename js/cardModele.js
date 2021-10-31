export default function Card(card) {
    const card_ = document.createElement('div')
    card_.classList.add('ListCards__Card')



    const cardHeader = document.createElement('div')
    cardHeader.classList.add('ListCards__Card__Header')



    const cardHContent = document.createElement('div')
    cardHContent.classList.add('ListCards__Card__Content')



    const title = document.createElement('h2')
    title.classList.add('ListCards__Card__Content__title')
    title.innerHTML = card.name
    cardHContent.append(title)


    const time = document.createElement('div')
    time.classList.add('ListCards__Card__Content__time')
    time.innerHTML = " " + card.time + " min"
    cardHContent.append(time)


    const ingredients = document.createElement('div')
    ingredients.classList.add('ListCards__Card__Content__ingredients')

    card.ingredients.forEach(element => {
        const ingredient = document.createElement('div')
        ingredient.innerHTML = element.ingredient + (element.quantity ? " : " + element.quantity : '') + " " + (element.unit ? element.unit : '') 
        ingredients.append(ingredient)
    });
    cardHContent.append(ingredients)
   

    const description = document.createElement('div')
    description.classList.add('ListCards__Card__Content__description')
    description.innerHTML = card.description
    cardHContent.append(description)



    card_.append(cardHeader)
    card_.append(cardHContent)

    return card_
}