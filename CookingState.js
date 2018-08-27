class State {
    initialize(screen) {
        this.currentScreen = screen;
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }
    getCurrentScreen() {
        return this.currentScreen;
    }

}

module.exports = State;