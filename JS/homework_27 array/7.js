'use strict';


let anna = { name: 'Anna', surname: 'Geraskina', age: 23 }
let alex = { name: 'Alex', surname: 'Karpenko', age: 27 };
let vitaly = { name: 'Vitaly', surname: 'Shpak', age: 26 };
let evgeniy = { name: 'Evgeniy', surname: 'Yaroshchuk', age: 20 };


let students = [anna, alex, vitaly, evgeniy]


let newStudents = students.map(student => (
    {
        fullname: `${student.name} ${student.surname}`,
        age: student.age,
    })
);

console.log(newStudents);


// function listNewStudents() {
//     let result = '';

//     for (let i in newStudents) {
//         result += `\n fullname: ${newStudents[i].fullname},  age: ${newStudents[i].age}`;
//     };

//     alert(result);
// }
// listNewStudents();


















