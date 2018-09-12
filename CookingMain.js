var State = require('./CookingState.js');
var screen = require('./CookingScreens.js');
var IUtility = require('./IngredientsUtility.js');
var MUtility = require('./MatchesUtility.js');
var stdin = process.openStdin();

var Screens = {
    main_menu: 0,
    ingredients_menu: 1,
    matches_menu: 2,
    reset_menu: 3,
    ingredients_menu2: 4
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

console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~  ");
console.log("\x1b[33m", "Welcome to your app, Chef  ");
console.log("\x1b[33m", "~~~~~~~~~~~~~~~~~~~~~~~~~  \x1b[0m");

screen.displayMenuForScreen(state.getCurrentScreen());
//Looper
stdin.addListener("data", function (a) {

    if (state.getCurrentScreen() == Screens.main_menu) {
        if (a == 1 || a == '1') {
            console.log("\nYour current ingredients are...");
            for (var i = 0; i < state.allIngredients.length; ++i) {
                console.log('[' + i + '] ' + state.allIngredients[i]);
            }
            state.setCurrentScreen(Screens.ingredients_menu)
        }

        else if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.matches_menu);
        }
        else if (a == 3 || a == '3') {
            state.setCurrentScreen(Screens.reset_menu);
            console.log("\nResetting Ingredients.....\n");
        }
        else if (a == 4 || a == '4') {
            console.log('\x1b[33m', "Arrivederci Chef", '\x1b[0m');
            process.exit(0);
        }
        else
            console.log("Please select an option from the menu\n\n");
    }

    //Select Ingredients
    else if (state.getCurrentScreen() == Screens.ingredients_menu) {
        var ingredientNumber = parseInt(a);
        if (isNaN(a)) {
            console.log("Please enter a number");
        } else if (a.toString().trim() < 0 || a.toString().trim() > state.getIngredients().length) {
            console.log("The number you have entered is not in the list");
            state.setCurrentScreen(Screens.ingredients_menu);
        }

        ingredientUtility = state.getIngredients()[ingredientNumber];
        var storedAway = state.addIngredients(ingredientUtility);
        // function remove_stored_duplicates(storedAway) {
        //     var obj2 = {};
        //     var return_array2 = [];

        //     for (var i = 0; i < storedAway.length; i++) {
        //         obj2[state.storedIngredients[i]] = true;
        //     }
        //     for (var key in obj2) {
        //         return_array2.push(key);
        //     }
        //     return return_array2;
        // }
        // storedAway = remove_stored_duplicates(storedAway);


        console.log('\x1b[33m', "\nYour chosen ingredients are: ", '\x1b[37m' + storedAway);
        if (a == -1 || a == '-1') {
            console.log("Going back.....\n");
            state.setCurrentScreen(Screens.main_menu)
        }
    }
    //Matching Ingredients with recipes
    else if (state.getCurrentScreen() == Screens.matches_menu) {
        //console.log(state.storedIngredients);

        console.log("------------------------")
        if (state.storedIngredients == 'Cheese' && 'Dough' && 'Tomato' && 'Pepperoni') {
            console.log(state.allMatches[0]);
        }
        else if (storedAway == 'Beef Patty' && 'Tomato' && 'Buns' && 'Lettuce' && 'Cheese') {
            console.log(state.allMatches[1]);
        }
        else if (storedAway == 'Potato' && 'Oil' && 'Cheese') {
            console.log(state.allMatches[2]);
        }
        else if (storedAway == 'Blueberry Filling' && 'Pastry') {
            console.log(state.allMatches[3]);
        }
        else if (storedAway == 'Eggs' && 'Flour' && 'Butter' && 'Milk') {
            console.log(state.allMatches[4]);
        }
        state.setCurrentScreen(Screens.matches_menu)
        if (a == -1 || a == '-1') {
            console.log("Going back.....\n");
            state.setCurrentScreen(Screens.main_menu)
        }
        else if(a != -1){
            console.log("Only [-1] can be entered in this menu");
            state.setCurrentScreen(Screens.matches_menu);
        }
    }
    //Reset Ingredients
    else if (state.getCurrentScreen() == Screens.reset_menu) {
        state.storedIngredients = []
        state.setCurrentScreen(Screens.main_menu);
    }

    screen.displayMenuForScreen(state.getCurrentScreen());
});

module.exports = State;
module.exports = IUtility;
module.exports = MUtility;