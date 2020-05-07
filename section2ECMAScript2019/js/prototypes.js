// Prototypes
(() => {
    const animal = {
        'say': function () {
            console.log(this.name, 'goes', this.voice);
        },
    };

    const dog = {
        __proto__: animal,
        'name': 'dog',
        'voice': 'woof',
    }

    // Object.setPrototypeOf(dog, animal); // Так не хорошо, не делай так

    const cow = Object.create(animal);
    cow.name = 'Cow';
    cow.voice = 'mooo';

    const cat = {
        __proto__: animal,
        'name': 'cat',
        'voice': 'meow',
    }

    dog.say();
    cat.say();
    cow.say();
})();


(() => {
    const animal = {
        'say': function () {
            console.log(this.name, 'goes', this.voice);
        },
    };

    function createAnimal (name, voice) {
        const result = Object.create(animal);
        result.name = name;
        result.voice = voice;
        return result;
    }

    const dog = createAnimal('dog', 'woof');
    const cat = createAnimal('cat', 'meow');
    const cow = createAnimal('cow', 'mooo');
    dog.say();
    cat.say();
    cow.say();

})();

(() => {
    function Animal (name, voice) {
        this.name = name;
        this.voice = voice;
    }

    Animal.prototype.say = function() {
        console.log(this.name, 'goes', this.voice);
    }

    const dog = new Animal('dog', 'woof');
    const cat = new Animal('cat', 'meow');
    const cow = new Animal('cow', 'mooo');
    dog.say();
    cat.say();
    cow.say();

    console.log(dog.toString());

    
    // const obj = Object.create(null);
    // console.log(obj.toString());

})();