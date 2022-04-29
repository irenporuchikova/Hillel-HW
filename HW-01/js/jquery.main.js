//Создайте три переменные.
// Присвойте первой переменной числовое значение.
// Вторая переменная равна первой переменной, увеличенной в три раза.
// Третья переменная равна сумме двух первых. Выведите на экран все три.

let firstNumber = 5;
let secondNumber = firstNumber * 3;
let thirdNumber = firstNumber +  secondNumber;


//Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt.
// Выведите на экран приветствие “What’s up John Doe”.

let firstName = prompt('Please enter your First Name');
let lastName = prompt('Please enter your Last Name');

alert("What’s up " + firstName + " " + lastName);


//Создайте переменные x и y для хранения числа.
// Значения переменные получают из prompt.
// Рассчитайте произведение, частное, разность и сумму этих значений.
// Результат последовательно отобразите в модальном окне.

let x = +prompt('Please enter number x');
let y = +prompt('Please enter number y');

let divisionNumber = x / y;
let multiplicationNumber = x * y;
let additionNumber = x + y;
let substractionNumber = x - y;

alert("Деление " + divisionNumber);
alert("Умножение " + multiplicationNumber);
alert("Сложение " + additionNumber);
alert("Вычитание " + substractionNumber);


//Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов,
//количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.
//(Просчитывать какой это месяц, 30 или 31 день не нужно).

let workTime = prompt('Введите количество рабочий часов');
let workDays = prompt('Введите количество рабочих дней');
let workRate = prompt('Введите свой рейт');

let salary = workTime * workDays * workRate;
alert("Зарплата за июль " + salary);


//Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.

let newNumber = prompt('Введите число');
newNumber = newNumber % 2;

if (newNumber){
    alert("Нечетное")
} else {
    alert("Четное")
}


//Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.

let newData = +prompt('Введите что либо');

if (newData){
    alert("Да, это число")
} else {
    alert("Нет это не число")
}


//Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите.
// Получите второе число из окна prompt.
// Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.

let randomNumber =  (Math.random());
let customNumber = +prompt('Введите число');``

let floorNumber = Math.floor(randomNumber * 100);

if  (floorNumber > customNumber) {
   alert("Рандомное " + floorNumber + " > " + customNumber + " Введенное");
} else {
    alert("Рандомное " + floorNumber + " < " + customNumber + " Введенное");
}


//Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end».
// Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать.
// С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str.
// Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной.
// Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать.
// Отобразите результат в модальном окне.

let firstText = prompt('Введите что вам нравится изучать', "Мне нравится изучать Front-end" );
let secondText = prompt('Введите что вам нравится изучать');

let findText = firstText.includes(secondText);
let subText = firstText.slice(0, 21);

let result = subText + secondText;

alert(result);
