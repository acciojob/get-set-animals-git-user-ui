// Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // getter
    get species() {
        return this._species;
    }

    // method
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat subclass
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr");
    }
}

// Dog subclass
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
