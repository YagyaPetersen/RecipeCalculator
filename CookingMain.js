var State = require('./CookingState.js');
var screen = require('./CookingScreens.js');
var IUtility = require('./IngredientsUtility.js');
var MUtility = require('./MatchesUtility.js');
var stdin = process.openStdin();

var Screens = {
    main_menu: 0,
    ingredients_menu: 1,
    matches_menu: 2
};

//Initializing state
var state = new State();
state.initialize(Screens.main_menu);

//Importing Ingredients Utility
var ingredientsPackage = state.allIngredients;
var ingredientUtility = new IUtility();
ingredientUtility.globalIngredients(ingredientsPackage);
state.allIngredients = ingredientUtility.globalIngredients();

//Importing Matching Utility
var matchesPackage = state.allMatches;
var matchesUtility = new MUtility();
matchesUtility.matchList(matchesPackage);
state.allMatches = matchesUtility.matchList();

console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("\x1b[33m", "Welcome to your app, Chef");
console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~", "\x1b[37m");

screen.displayMenuForScreen(state.getCurrentScreen());

//Looper
stdin.addListener("data", function (a) {
    if (state.getCurrentScreen() == Screens.main_menu) {


        if (a == 1 || a == '1') {
            console.log("Your current ingredients are...");
            for (var i = 0; i < state.allIngredients.length; ++i) {
                console.log('[' + i + '] ' + state.allIngredients[i]);
            }
            state.setCurrentScreen(Screens.ingredients_menu);
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
    if (state.getCurrentScreen() == Screens.ingredients_menu) {
        var ingredientNumber = parseInt(a);

        if (isNaN(a)) {
            console.log("Please enter a number");

        } else if (a.toString().trim() < 0 || a.toString().trim() > state.getIngredients().length) {
            console.log("The number you have entered is not in the list");
            state.setCurrentScreen(Screens.ingredients_menu);
        }
        console.log("You have chosen: " + ingredientUtility);
        state.setCurrentScreen(Screens.ingredients_menu);
        ingredientUtility = state.getIngredients()[ingredientNumber];


        if (a == -1 || a == '-1') {
            console.log("Going back.....\n");
            state.setCurrentScreen(Screens.main_menu)
        }
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
module.exports = IUtility;
module.exports = MUtility;