// // деструктуризация, // деструктуризация объектов
(() =>{
    const person = {
        'firstName': 'Bob',
        'lastName': 'Muraev',
        'age': 33,
    }
    
    const personTwo = {
        'name': {
            'first': 'Ivan',
            'last': 'Drago',
        },
        'age': 33,
    }
    const {firstName, lastName} = person;
    console.log('деструктуризация ',firstName, lastName);
    
    const {name: {first, last}} = personTwo;
    console.log('деструктуризация ',first, last)
    
    const {name: {first: firstNameTwo, last: lastNameTwo}} = personTwo;
    console.log('деструктуризация ',firstNameTwo, lastNameTwo);
})();

(() => {
    const person = {
        'firstName': 'Bob',
        'lastName': 'Muraev',
        'age': 33,
        'role': 'admin',
    }
    
    const personTwo = {
        'name': {
            'first': 'Ivan',
            'last': 'Drago',
        },
        'age': 33,
    }

    const { role = 'user'} = person;
    console.log(role)
    const { permissions: {role2 = 'user'} = {} } = personTwo;
    console.log(role2)
})();

(() => {
    // Параметры деструктуризации
    function connect ({
        host = 'locho',
        port = 12345,
        user = 'guest' } = {}) {
        console.log('user:', user, 'port:', port, 'host:', host );
    }
    connect();
    connect({
        // 'host': 'localhost',
        'port': 1829,
        // 'user': 'Peter'
    })
})();

(() => {
    const dict = {
        'duck': 'quack',
        'dog': 'wuff',
        'mouse': 'squeak',
    }
    const {duck, ...otherAnimals} = dict;

    console.log(duck);
    console.log(otherAnimals);
})();