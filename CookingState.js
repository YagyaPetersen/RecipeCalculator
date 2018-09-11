class State {

    initialize(screen) {
        this.currentScreen = screen;
        this.allMatches = [];
        this.allIngredients = [];
        this.storedIngredients = [];
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
    addIngredients(bilbobaggins) {
        this.storedIngredients.push(bilbobaggins);
        return this.storedIngredients
    }
    getIngredients() {
        return this.allIngredients;
    }

}
module.exports = State;