// Objects
(() => {
    const x = 10;
    const y = 30;

    const point = {
        x: x,
        y: y,
        draw: function () {
            return x + y;
        }
    }
    console.log(point);
    console.log(point.draw());

    const p = { 
        x,
        y,
        draw () {
            return ( x + y ) * 2;
        }
    };
    console.log(p);
    console.log(p.draw());

})();

(() => {
    const prefix = '_blah_';

    const data = {
        [prefix + 'name']: 'Bob',
        [prefix + 'age']: 23,
    }
    console.log(data);
})();

(() => {
    const defaults = {
        'host': 'localhost',
        'dbName': 'blog',
        'user': 'admin',
    };

    const opts = {
        'user': 'John',
        'password': 'utopia'
    }

    const res = Object.assign({}, defaults, opts);
    console.log(res);
})();

(() => {
    const person = {
        'name': 'Bob',
        'friends': ['Mark', 'Jacob'],
    };

    console.log(person);

    const shallowCopy = Object.assign({}, person);

    person.friends.push('Jane');

    console.log(shallowCopy);
})();