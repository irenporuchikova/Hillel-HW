//1. Создайте смешанный массив, например [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']. Посчитайте сумму всех его чисел, включая строковые.
// Выведите сумму в alert.

let mainArr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;

for(let arr of mainArr){
    if(isNaN(arr)){
        continue;
    }

    sum += +arr;
}

alert(sum);


// 2. Создайте массив со значениями: 'AngularJS', 'jQuery'
// Добавьте в начало массива значение 'Backbone.js'
// Добавьте в конец массива значения 'ReactJS' и 'Vue.js'
// Добавьте в массив значение 'CommonJS' вторым элементом
// Найдите и удалите из массива значение 'jQuery', выведите его в alert со словами “Это здесь лишнее”

let mainArr = ['AngularJS','jQuery'];

mainArr.unshift('Backbone.js');
mainArr.push('ReactJS','Vue.js');
mainArr.splice(2, 0, 'CommonJS');

let indexArr = mainArr.indexOf('jQuery');

for (let arr of mainArr){
    if (arr == 'jQuery'){
        alert('jQuery');
        alert('Это здесь лишнее');
        mainArr.splice(indexArr, 1);
    }
}

alert(mainArr);


// 3. Создайте строку с текстом 'Как однажды Жак звонарь сломал фонарь головой'.
// Разбейте ее на массив слов, и переставьте слова в порядке 'Как Жак звонарь однажды сломал головой фонарь'
// с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let text = 'Как однажды Жак звонарь сломал фонарь головой';
let arr = text.split(' ');

arr.splice(1, 0, arr[2], arr[3]);
arr.splice(4, 2,);
arr.splice(5, 0, arr[6]);
arr.splice(7, 1,);

text = arr.join(' ');

alert(text);


// 4. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: '29'
}
let keyValue;
let searchKey = prompt('Введите Свойство');

if (searchKey in person){
    alert(person[searchKey]);
} else {
    keyValue = prompt('Нужно свойства в обьекте нет. Введите его значение для того чтобы добавить в обьект');

    person[searchKey] = keyValue;

    console.log(person);
}

// 5. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...),
// не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

person.phone = {
    brand: prompt('Введите бренд'),
    model: prompt('Введите модель'),
    color: prompt('Введите цвет'),
    year: prompt('Введите год')
}

console.log(person);


// 6. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте
// в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let newArr = [];
let newElement;
let n = 5;
let sum = 0;

for(let i = 0; i < n; i++){
    newElement = prompt('Введите что-то');
    newArr.push(newElement);
}

for(let arr of newArr){
    if(isNaN(arr)){
        continue;
    }

    sum += +arr;
}

console.log(newArr);
console.log(sum);

// 7. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения - (задача со звездочкой)

let newArr = [];

for (let i = 1; i < 10; i++){
    newArr[i] = [];

    for (let j = 1; j < 10; j++){
        newArr[i][j] = i * j;

    }
}

console.log(newArr);