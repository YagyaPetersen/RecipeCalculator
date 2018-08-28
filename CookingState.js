class State {
    initialize(screen) {
        this.currentScreen = screen;
        this.ingredientsList = [];
        
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
    addIngredients(recipes){
        this.ingredientsList.push(recipes);
    }
    getIngredients(){
        return this.ingredientsList;
    }

}

module.exports = State;