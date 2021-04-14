'use strict';


const studentNameMan = ['Oleg', 'Vitaly', 'Alexander', 'Evgeniy', 'Ruslan'];
const studentNameWoman = ['Inna', 'Julia', 'Angelina', 'Anna'];
const studentNameAll = studentNameMan.concat(studentNameWoman);


function nameView() {
    let result = '';
    let picture = `\u2705`;
    for (let i = 0; i < studentNameAll.length; i++) {
        result += picture + `Студент(ка) гурппы "Front-End":   ${[i]} - ${studentNameAll[i]}\n`;
    };
    alert(result);
}
nameView();