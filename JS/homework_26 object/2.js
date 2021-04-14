// 2) Взять объект с первого задания , изменить свойство : "Страна проживания" на Монголию, добавить свойство "Профессия" и удалить свойство "Цвет волос", после всех действий вывести с помощью alert объект на экран данные



let student = {
    name: 'Анна',
    age: 36,
    'Country of Residence': 'Украина',
    'hair color': " русый",
};


student['Country of Residence'] = 'Монголия';
student.profession = 'банкир';
delete student['hair color'];



for (let key in student) {

    alert(`${key}: ${student[key]}`);

}


