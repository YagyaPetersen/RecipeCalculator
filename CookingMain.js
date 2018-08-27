var State = require('./CookingState.js');
var recipes = require('./Recipes.js');
var screen = require('./CookingScreens.js');
var stdin = process.openStdin();

var Screens = {
    main_menu: 0,
    ingredients_menu: 1,
    matches_menu: 2,
    reset_menu: 3,
};

var state = new State();
state.initialize(Screens.main_menu);

console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("\x1b[33m", "Welcome to your app, Chef");
console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~", "\x1b[37m");
screen.displayMenuForScreen(state.getCurrentScreen());
//Looper
stdin.addListener("data", function (a) {

    if (state.getCurrentScreen() == Screens.main_menu) {
        if (a == 1 || a == '1') {
            state.setCurrentScreen(Screens.ingredients_menu);
        }
        if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.matches_menu);
        }
        if (a == 3 || a == '3') {
            console.log("Resetting Ingredients.....\n\n");
            state.setCurrentScreen(Screens.main_menu);
        }
        if (a == 4 || a == '4') {
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