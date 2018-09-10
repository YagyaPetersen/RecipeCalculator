class State {

    initialize(screen) {
        this.currentScreen = screen;
        this.allIngredients = [];
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
    addIngredients(recipes) {
        this.allIngredients.push(recipes);
    }
    getIngredients() {
        return this.allIngredients;
    }

}
module.exports = State;