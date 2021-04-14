'use strict';

let students = [];
let studentDiscrab = {};
function studentList() {
    for (let i = 0; i < 2; i++) {
        studentDiscrab = {
            name: prompt('Введите Ваше имя', ''),
            surname: prompt('Введите Вашу фамилию', ''),
            age: prompt('Укажите Ваш возраст', ''),
        }
        console.log(studentDiscrab);
        students.push(studentDiscrab);
    }
    console.log(students);
}
studentList();



// let newStudents = students.map(student => (
//     {
//         fullname: `${student.name} ${student.surname}`,
//         age: student.age,
//     })
// );

// console.log(newStudents);



// function listNewStudents() {
//     let result = '';

//     for (let i in students) {
//         result += `\n name: ${students[i].name}, surname: ${students[i].surname}, age: ${students[i].age}`;
//     };

//     alert(result);
// }
// listNewStudents();
















