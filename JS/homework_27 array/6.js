'use strict';

let users = [{
    name: 'Oleg',
    age: 20,
},
{
    name: 'Vitaly',
    age: 28,
},
{
    name: 'Alexander',
    age: 35,
},
{
    name: 'Evgeniy',
    age: 44,
},
{
    name: 'Ruslan',
    age: 25,
},

];



users.forEach(users => console.log(users.name));



let youngUser = users.filter(function (user) {
    return (user.age > 24 && user.name === 'Ruslan');

});



console.log(youngUser);

