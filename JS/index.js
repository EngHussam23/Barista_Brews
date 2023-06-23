'use strict';

let coffeeDrinks = [
    { name: 'Espresso', roast: 'Dark Roast', type: 'Hot', image: 'assets/espresso.png', Ingredients: 'Water, Coffee Grind', steps: 'Add the coffee grind to your espresso machine, fill the espresso water tank with water, start the espresso machine to make your espresso, Serve and enjoy' },
    { name: 'Latte', roast: 'Medium Roast', type: 'Hot, Cold', image: 'assets/latte.png', Ingredients: 'Espresso, Steamed Milk, Milk Foam, Optional Flavoring', steps: 'Prepare your espresso shot, Steam your milk using a steam wand or froth it with a frother, pour the espresso shot in your favorite cup and add the milk to it, scoop the foam and add it to top of your drink and enjoy, you can add some flaovring like syrups (ex: vanilla or caramel) or cocoa powder, Serve and enjoy' },
    { name: 'Macchiato', roast: 'Light Roast', type: 'Hot, Cold', image: 'assets/mecciato.png', Ingredients: 'Espresso, Steamed Milk, Milk Foam', steps: 'Prepare your espresso shot, Steam your milk using a steam wand or froth it with a frother, Pour your espress shot in your favorite cup, Add the steamed / frothed milk put the foam on top, Serve and enjoy' },
    { name: 'Americano', roast: 'Dark Roast', type: 'Hot', image: 'assets/americana.png', Ingredients: 'Esresso, Hot Water, Milk or cream (optional), Sweetner (optional)', steps: 'Prepare one or two espresso shots, Pour the hot water on the espresso for milder taste, You can add milk or a sweetner like sugar or honey, Serve and enjoy' },
    { name: 'Iced Coffee', roast: 'Dark Roast', type: 'Cold', image: 'assets/ilish coffe.png', Ingredients: 'Coffee, Ice, Milk or cream (opional), Sweetner (optional), Flavorings (optional), Garnish or toppings (optional)', steps: 'Brew your coffee and leave it to coll down to the room temrature, fill a cup or glass (up to your preference) with ice or crushed ice, Add milk or cream for extra tast (up to your preference), Stir the mixture to combine the ingredients, Add toppings of your choice like whipped and chocolate shavings or cocoa powder or other toppings (up to your preference), serve immediatly and enjoy' },
    { name: 'Cream Latte', roast: 'Medium Roast', type: 'Hot', image: 'assets/latte with ceam.png', Ingredients: 'Espresso, Milk, Sweetner (optional), Vanilla extract (optional), Whipped cream (optional), Sprinkles (optional)', steps: 'Prepare your espresso shot, Heat your milk and froth it using a frother, Pour the espresso in a cup, Slowly pour the milk over the espresso and keep holding back the foam with a spoon to allow the creamy milk to pour first, Spoon the remaining foam on the top of the latte, add a sweetner and some toppings based of your choice like cinnamon powder or chocolate shavings for extra flavor and a nice look, Serve and enjoy' },
];

let coffeeDrinksToJSON = JSON.stringify(coffeeDrinks);
localStorage.setItem('coffeeDrinksDummy', coffeeDrinksToJSON);

//The location of the drinks in the Home Page
let targetArea = document.getElementById('drink_cards');

//Initilizing an object to save the user choice
let userChoice = { name: '', roast: '', type: '', image: '', ingeredients: '', steps: '' };

//This function to render the drinks in the main drinks section
renderCard(targetArea, coffeeDrinks);

//This method renders a the drink card
function renderCard(targetArea, list) {
    for (let i = 0; i < list.length; i++) {

        //Creating elements
        let link = document.createElement('a');
        let card = document.createElement('section');
        let cardBody = document.createElement('section');
        let cardTitle = document.createElement('p');
        let coffeeRoastLabel = document.createElement('section');
        let coffeeBeanImg = document.createElement('img');
        let labelText = document.createElement('p');
        let drinkImage = document.createElement('img');

        //Assigning values to the elements
        cardTitle.textContent = list[i].name;
        coffeeBeanImg.setAttribute('src', 'assets/beans33.png');
        labelText.textContent = list[i].roast;
        drinkImage.setAttribute('src', list[i].image);
        link.setAttribute('href', 'item.html');
        link.setAttribute('target', '_blank');

        //Saving the user choice to local storage
        link.addEventListener('click', function () {
            userChoice.name = list[i].name;
            userChoice.image = list[i].image;
            userChoice.ingeredients = list[i].Ingredients;
            userChoice.roast = list[i].roast;
            userChoice.steps = list[i].steps;
            userChoice.type = list[i].type;
            localStorage.setItem('user choice', JSON.stringify(userChoice));
        });

        //Appending elements
        coffeeRoastLabel.appendChild(coffeeBeanImg);
        coffeeRoastLabel.appendChild(labelText);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(coffeeRoastLabel);
        card.appendChild(cardBody);
        card.appendChild(drinkImage);
        link.appendChild(card);
        targetArea.appendChild(link);

        //giving the elements classes to use in css
        coffeeBeanImg.setAttribute('class', 'beanImg');
        drinkImage.setAttribute('class', 'drinkImage');
        labelText.setAttribute('class', 'labelText');
        cardTitle.setAttribute('class', 'cardTitle');
        cardBody.setAttribute('class', 'cardBody');
        card.setAttribute('class', 'card');
    }
}

//This function to render the drinks in the "Suggested by Barista Brew visitors:" section
function renderSavedDrinksByUser() {
    const savedDrinksByUser = localStorage.getItem('drinksAddedByUser');
    const savedDrinksByUserArray = JSON.parse(savedDrinksByUser)
    console.log('savedDrinksByUserArray', savedDrinksByUserArray);
    let targetArea = document.getElementById('drink_cards_by_user');
    if (savedDrinksByUserArray) {
        renderCard(targetArea, savedDrinksByUserArray);
    }
}
renderSavedDrinksByUser();

//comment