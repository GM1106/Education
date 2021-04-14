// 3) Создать пустой объект "сотрудники" , запросить у пользователя имя и зарплату (минимум 5 сотрудников), после чего просчитать среднюю зарплату с учутом зарплат всех сотрудников.

let emploers = {};
let count = 0;
let sum = 0;

for (let i = 0; i < 5; i++) {
    let name = prompt('Укажите Ваше имя', ' ');
    emploers[name] = +prompt('Укажите Вашу зарплату', ' ');
    console.log(emploers);
}


for (let key in emploers) {
    count++;
    sum += emploers[key];
}

let avgSalary = sum / count;
alert(`Cредня зарплата в компании составляет: ${avgSalary}`);