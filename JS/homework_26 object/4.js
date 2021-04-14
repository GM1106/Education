// Создать объект, описывающий автомобиль (марка авто, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. (Пример: средю скорость 80 км, а расстояние 160 км. - время равно 2 часа)

let car = {
    brand: "Porsh",
    model: "Boxter",
    year: "2019",
    avgSpeed: 100,

    carShow: function () {
        alert("Марка автомобиля - " + this.brand + ", " + "модель автомобиля - " + this.model + ", " + "Год выпуска автомобиля - " + this.year + ", " + "Средняя скорость автомобиля - " + this.avgSpeed + " " + 'километров в час');
    },

    carTime: function () {
        let dist = +prompt('Введите дистанцию в километрах', '')
        time = dist / this.avgSpeed
        alert('Для преодаления  дистанции ' + " " + (dist) + " " + " километров данной модели атомобиля понадобиться" + " " + `${time}` + " " + 'часов')
    },
};



car.carShow();
car.carTime();
