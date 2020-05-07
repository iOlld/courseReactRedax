// Classes
(() => {
    // function Animal (name, voice) {
    //     this.name = name;
    //     this.voice = voice;
    // }

    // Animal.prototype.say = function() {
    //     console.log(this.name, 'goes', this.voice);
    // }

    // const dog = new Animal('dog', 'woof');
    // const cat = new Animal('cat', 'meow');
    // const cow = new Animal('cow', 'mooo');
    // dog.say();
    // cat.say();
    // cow.say();

    class Animal {
        constructor(name, voice) {
            this.name = name;
            this.voice = voice;
        }

        say() {
            console.log(this.name, 'goes', this.voice);
        }
    }

    class Bird extends Animal {
        constructor(name, voice, canFly) {
            super(name, voice);
            super.say();
            this.canFly = canFly;
        }

        say() {
            console.log( this.name + ' don\'t like to tolk');
        }
    }

    const duck = new Bird('Duck', 'quack', true);

    duck.say()

})()