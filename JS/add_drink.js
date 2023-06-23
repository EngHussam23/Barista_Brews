'use strict'


function Drink(name, img, ingredients, steps, type) {
    this.name = name;
    this.image = img;
    this.Ingredients = ingredients;
    this.steps = steps;
    this.type = type;
}



function handler(e) {
    e.preventDefault();
    let drinkName = e.target.name.value;
    let urlImage = e.target.urlImage.value;
    let drinkIngredients = e.target.drinkIn.value;
    let drinkSteps = e.target.drinkSt.value;
    let drinkType = e.target.drone.value;

    const drink = new Drink(drinkName, urlImage, drinkIngredients, drinkSteps, drinkType);


    const savedDrinksByUser = localStorage.getItem('drinksAddedByUser');
    let savedDrinksByUserArray = JSON.parse(savedDrinksByUser)

    if (savedDrinksByUserArray) {
        savedDrinksByUserArray.push(drink)
    } else {
        savedDrinksByUserArray = [drink]
    }


    const stringSavedDrinksByUserArray = JSON.stringify(savedDrinksByUserArray)

    // save data to localstorage
    localStorage.setItem('drinksAddedByUser', stringSavedDrinksByUserArray)
}




let saveValues = document.getElementsByTagName('form')[0];
saveValues.addEventListener('submit', handler);
