let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let ul = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuch = prompt("Во сколько обойдется?", '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        ul: howMuch
    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false
}
alert(+appData.budget / 30);