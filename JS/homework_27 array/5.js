let check = [{
    product: 'Хлеб',
    number: 2,
    price: 18,
}, {
    product: 'Молоко',
    number: 1,
    price: 40,
}, {
    product: 'Бананы',
    number: 7,
    price: 10,
},
{
    product: 'Сок',
    number: 3,
    price: 30,
},
];


function сheck() {
    let result = '';
    let picture = `\u2728`.repeat(14);
    let sumGeneral = 0;
    let sumAverage = 0;
    let counter = 0;
    for (let i = 0; i < check.length; i++) {
        result += picture + ` \nНазвание: ${check[i].product};\nКол-во: ${check[i].number};\nЦена: ${check[i].price}грн;\n`;
        sumGeneral += check[i].price * check[i].number;
        counter += check[i].number;
        sumAverage = sumGeneral / counter;
    };
    alert(result);
    alert(`Общая сумма покупки ${sumGeneral} грн`);
    alert(`Cредняя стоимости одного товара в чеке ${sumAverage.toFixed(2)} грн`);
}
сheck();

