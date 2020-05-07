const person = {
    'firstName': 'Bob',
    'lastName': 'Muraev',
    'age': 33,
}

console.log(person);

person.male = 'Man';

console.log(person);

// // for (var i = 0; i < 3; i++) {
// //     setTimeout(function () {
// //         console.log(i);
// //     }, i*100);
// // }

// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log('i ',i);
//     }, i*100);
// }

const arr = ['1', '3', '2', '12', '9', '4'];

const resMax1 = arr
    .map((element) => parseInt(element))
    .filter((num) => num%2)
    .reduce((max, val) => Math.max(max, val), 0);

console.log('resMax1 ',resMax1);


const resMax2 = arr
    .map((element) => parseInt(element))
    .reduce((max, val) => Math.max(max, val), -Infinity);

console.log('resMax2 ',resMax2);

const greeter = {

    greet: function (name) {
        console.log('Hello', name);
    },

    greetAll: function (names) {
        names.forEach((name) => {
            this.greet(name);
        });
    }
};

greeter.greetAll(['Bob', 'Don Digidon', 'Pete', 'Mark']);


// rest параметр
function max (a, b, ...numbers) {
    console.log('numbers ',numbers);
}

max(1,2,3,4,5,5,6);


// spread оператор
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const resMax3 = Math.max(...arr1, ...arr2);

console.log('resMax3 ',resMax3);

const shallowCopy = [...arr1, ...arr2];

console.log('shallowCopy ',shallowCopy);
