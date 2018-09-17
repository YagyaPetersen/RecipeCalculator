module.exports = {
    displayMenuForScreen(screen) {
        //Main Menu
        if (screen == 0) {
            console.log("Would you like to...\n1. Choose Ingredients\n2. Search for Recipe Matches\n3. Reset Ingredients\n4. Exit");
        }
        //Ingredient Menu
        if (screen == 1) {
            console.log("\nSelect your ingredients or enter [-1] to stop selecting :");
        }
        //Matches Menu
        if (screen == 2) {
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^")
            console.log("These are the recipes you could make\nPress [-1] to go back");
        }
    }
}