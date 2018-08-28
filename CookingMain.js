var fs = require('fs');
var State = require('./CookingState.js');
var screen = require('./CookingScreens.js');
var stdin = process.openStdin();
var data = fs.readFileSync('Recipes.json', 'utf-8');
json = JSON.parse(data);
var recipeList = json;


var Screens = {
    main_menu: 0,
    ingredients_menu: 1,
    matches_menu: 2,
    reset_menu: 3,
};

var state = new State();
state.initialize(Screens.main_menu);

recipeList.forEach(function(currentValue){
console.log(currentValue.ingredients);


})


console.log(state.ingredientsList);
console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("\x1b[33m", "Welcome to your app, Chef");
console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~", "\x1b[37m");

screen.displayMenuForScreen(state.getCurrentScreen());
//Looper
stdin.addListener("data", function (a) {

    if (state.getCurrentScreen() == Screens.main_menu) {
        if (a == 1 || a == '1') {
            console.log("Your current ingredients are...");
            state.setCurrentScreen(Screens.ingredients_menu);
            for (var i = 0; i < recipeList.length; i++) {
            console.log(recipeList[i].ingredients);
        }
        }
        else if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.matches_menu);
        }
        else if (a == 3 || a == '3') {
            console.log("Resetting Ingredients.....\n\n");
            state.setCurrentScreen(Screens.main_menu);
        }
        else if (a == 4 || a == '4') {
            console.log("Arrivederci Chef");
            process.exit(0);
        }
        else
            console.log("Please select an option from the menu\n\n");

    }

    //Select Ingredients
    else if (state.getCurrentScreen() == Screens.ingredients_menu) {
  
    }
    //Matching Ingredients with recipes
    else if (state.getCurrentScreen() == Screens.matches_menu) {

    }
    //Reset Ingredients
    else if (state.getCurrentScreen() == Screens.reset_menu) {

    }



    screen.displayMenuForScreen(state.getCurrentScreen());
});

module.exports = State;