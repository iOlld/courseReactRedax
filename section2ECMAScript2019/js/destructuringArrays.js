// деструктуризация массивов
(() => {
    const fib = [1, 1, 2, 3, 5, 8, 13, 21];

    // const [a, b, c] = fib;
    const [,,a,, b,,, c] = fib; // пустые запяиые это пропуск элемента массива

    console.log(a, b, c);
})();

(() => {
    const line = [ [10, 17], [14, 7] ];
    const [ [p1x, p1y], [p2x, p2y] ] = line;
    console.log(p1x, p1y, p2x, p2y);
})();

(() => {
    const people = ['chris', 'sandra'];
    const [a, b, c = 'guest'] = people;
    console.log(a, b, c);
    const people2 = ['chris', 'sandra', 'bob'];
    const [x, ...otherPeople] = people2;
    console.log(x, otherPeople)
})();

(() => {
    const dict = {
        'duck': 'quack',
        'dog': 'wuff',
        'mouse': 'squeak',
        'humster': 'squeak',
    };    
    // const person = {
    //     'name': {
    //         'first': 'Ivan',
    //         'last': 'Drago',
    //     },
    //     'age': 33,
    // }
    
    const res = Object.entries(dict)
        // .filter((arr) => arr[1] === 'squeak');
        .filter(([, value] ) => value === 'squeak')
        .map(([key]) => key);

    console.log(res);


})();

(() => {
    const shape = {
        'type': 'segment',
        'coordinates': {
            'start': [10, 15],
            'end': [17, 15]
        }
    };

    const {coordinates: { start: [startX, startY], end: [endX, endY]}} = shape;

    console.log(startX, startY, endX, endY);

})();