// 1. Получите текущую дату
// Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
// Пример ввода:
//     curday('-');
// Вывод:
//     "07-07-2022"

function curday(symbol){
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}-${month}-${now.getFullYear()}`;
}



// 2. Получить название месяца с определенной даты
// Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.
// Пример ввода:
//     getMonthName(new Date("10/11/2021"));
// Вывод:
//     "October"

function getMonthName(date){
    return date.toLocaleString('en', { month: 'long' });
}


// 3. Сравнение двух дат
// Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).
// Пример ввода:
//     compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00'));
// Вывод:
//     "Date1 > Date2"

function compareDates(date1, date2){
    let milliseconds1 = date1.getTime();
    let milliseconds2 = date2.getTime();
    let compare = '';

    if (milliseconds1 < milliseconds2){
        compare = 'Date1 < Date2';
    } else if(milliseconds1 > milliseconds2){
        compare = 'Date1 > Date2';
    } else {
        compare = 'Date1 = Date2';
    }

   return compare;
}



// 4. Проверьте, является ли дата выходным днем
// Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
// Пример ввода:
//     checkIsWeekend('Nov 16, 2020');
// Вывод:
//     "не выходной"
//


function checkIsWeekend(date){
    let dayOfWeek = new Date(date).getDay();

    return dayOfWeek = (dayOfWeek == 0 || dayOfWeek > 5) ? "выходной" : "не выходной";

}