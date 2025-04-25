class CoffeeMachine {
    #waterLevel = 0;

    constructor() {
        this.#waterLevel = 100;
    }

    brew() {
        if (this.#waterLevel > 0) {
            console.log("Brewing coffee...");
            this.#waterLevel -= 10;
        } else {
            console.log("Water level is too low!");
        }
    }

    refill() {
        this.#waterLevel = 100;
        console.log("Refilled water level to 100.");
    }
}