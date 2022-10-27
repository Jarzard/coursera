// create your classes here
class Card {
    constructor (name) {
        this.name = name;
    }
    activateCard() {
        console.log("You played a card")
    }
}

class Trainer extends Card {
    activateCard() {
        console.log("This is the trainer card description")
    }
}

class Energy extends Card {
    activateCard() {
        console.log("Choose a Pokemon to add this to")
    }
}

class Pokemon extends Card {
    activateCard() {
        console.log("You Played", this.name)
    }
}

const charizard = new Pokemon("Charizard");
const oak = new Trainer();

charizard.activateCard();
oak.activateCard()