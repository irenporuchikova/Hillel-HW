//В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран,
// x – отрицательное число, положительное или ноль.

let number = +prompt("Введите число");

if (number > 0){
   alert("Число положительное");
} else if (number == 0){
   alert("Число равно 0");
} else {
   alert("Число отрицательное");
}


//Создайте три переменные с любыми числовыми значениями.
// Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.

let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");
let thirdNum = +prompt("Введите третье число");
let minNumber;
let variableName;

if (firstNum < secondNum){
    minNumber = firstNum;
    variableName = 'firstNum';
} else {
    minNumber = secondNum;
    variableName = 'secondNum';
}

if (thirdNum < minNumber){
    minNumber = thirdNum;
    variableName = 'thirdNum';
}

alert(variableName + ' - ' + minNumber);


//У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
// В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива.
// С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

let money = +prompt("Сколько у вас есть денег?");

money > 1000 ? alert("Вы можете полететь на Майорку") : alert("Вам хватит только на пиво");


//В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”.

let age = +prompt("Введите ваш возраст");

age >= 20 && age < 27 ? alert("Вислати повiстку") : alert("Свободны");


//Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt.
// Если ваша, то вы едете домой, в противном случае – ожидаете.

let busNumber = +prompt("Какая маршрутка приехала?");

busNumber == 7 && busNumber < 225 && busNumber < 255 ? alert("Вы едете домой") : alert("Ждете еще");


//В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.

let dayOfTheWeek = prompt("Какой сегодня день недели?");

dayOfTheWeek != 'Saturday' && dayOfTheWeek != 'Sunday' ? alert("Нужно идти на работу") : alert("Сегодня выходной");


//Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0,
// то выведите сумму этих переменных, иначе выведите 'Неверно!'.

let x = +prompt("Введите значения x от -20 до 20");
let y = +prompt("Введите значения y от -20 до 20");

x <= 1 && y >= 3 || y < 0 ? alert(x + y) : alert("Неверно");


//Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5.
// Выведите новое значение переменной на экран.

let x = +prompt("Введите значения x от -20 до 20");
let y = +prompt("Введите значения y от -20 до 20");

x > 2 && x < 11 || y >= 6 && y < 4 ? alert(x * 2) : alert(x + 5);


//Получите из prompt значение для имени пользователя. Выведите на экран приветствие.
// Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.

let userName = prompt("Введите имя");

userName ? alert(userName + ", привет!") : alert("Введите имя еще раз");


//Создайте две переменные: greeting и lang. Переменная greeting – пустая строка.
// Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt).
// Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском,
// если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang.
// Решите задачу через if-else и через switch-case.

let greeting = '';
let lang = prompt("Введите ua, en или de");

//switch
switch (lang){
    case 'ua':
        greeting = 'Добрий день';
        break;
    case 'en':
        greeting = 'Hello';
        break;
    case 'de':
        greeting = 'Guten Tag!';
        break;
}

alert(greeting);

//if-else
if (lang === 'ua'){
    greeting = 'Добрий день';
} else if (lang === 'en'){
    greeting = 'Hello';
} else if (lang === 'de'){
    greeting = 'Guten Tag!';
};

alert(greeting);



//Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.

let str = '';

for (let i = 0; i < 5; i++){
    str = `${str}.#`;
}

alert(str);


// Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
// Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you


for (let i = 0; ; i++){
    let userName = prompt('Введите имя');

    if (userName) {
        alert(`Happy birthday to you \n Happy birthday dear ${userName} \n Happy birthday to you \n Happy birthday to yo `);
    } else {
        break;
    }
}


//Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

for (let i = 0; ; i++){
    let str = confirm('Согласны ли вы с темой?');

    if (str) {
        break;
    } else {
        continue;
    }
}


//В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем.
// Результат отобразите в окне alert.

let num = prompt('Введите число');
let sum = 0;

for (let i = 0; i < num; i++){
    if (i % 2){
        sum = sum + i;
    }
}

alert(sum);


//Hапишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9.
// Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

let num;

for (let i = 0; ; i++){
    num = Math.random();

    if (num > 0.9){
        alert(`число - ${num} \n итераций - ${i}`);

        break;
    }
}


//Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...

let multiplication;

for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        multiplication = i * j;
        console.log(`${i} * ${j} = ${multiplication}`);
    }
}


//С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...  - (выполнять по желанию)


let str = '';
let c;

for(let a = 1, b = 1; a <= 13; str += a + ' ', c = a + b, a = b, b = c);

alert(str);


//Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена.
// После выхода из цикла распечатайте количество введенных чисел, их общую сумму.

let num = '';
let sum = 0;

for (let i = 0; ; i++){
    num = +prompt('Введите число');
    sum = sum + num;

    if (!num) {
        alert(`введено ${i} цифр \n сумма - ${sum}`);
        break;
    }
}


//Напишите проверку пароля, введенного пользователем (заведомо определите пароль).
// Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”.
// Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена.
// В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”.
// Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля

let password = 'test123';
let userPassword = '';

if (password === userPassword){
    alert('Вы успешно авторизованы');
}

for (let i = 0; ; i++){
    userPassword = prompt('Введите пароль');

    if(userPassword){
        if (password === userPassword){
            alert('Вы успешно авторизованы');
            break;
        }
    } else {
        let cancel = confirm('Вы уверены, что хотите отменить авторизацию?');

        if(cancel){
            alert('Вы отменили авторизацию');

            break;
        }
    }
}


// Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:
//  - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»;

for (let i = 1; i < 51; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        alert('FizzBuzz');
    } else if (i % 5 == 0) {
        alert('Buzz');
    }  else if (i % 3 == 0) {
        alert('Fizz');
    } else {
        alert(i);
    }
}