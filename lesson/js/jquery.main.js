// let str = 'aaa@bbb@ccc';
// let arr = str.split('');
// let newStr = '';
//
// for (let i of arr) {
//     if(i == '@') {
//         i = '!';
//     }
//
//     newStr = newStr + i;
// };
//
// alert(newStr);


// let str = 'aaa bbb ccc';
// let newArr = str.split('');
// let letter = 'b';
// let newStr = '';
//
// for(let arr of newArr){
//
//     if(arr == letter){
//         continue;
//     }
//
//     newStr += arr;
// }
//
// alert(newStr);
//
// let str = 'aaa bbb ccc';
// let newStr = str.replace('b','')
//
// alert(newStr);
//
// let str  = 'aaa bbb ccc';
// let arr = str.split(' ');
// arr.splice(1,1)
// alert(arr);

// let newNumber = prompt('Введите число');
//
// function cubedNumber(num){
//     let cubed = num ** num;
//
//     alert(cubed);
// }
//
// cubedNumber(newNumber);


// let arr = [1, 2, 3, -1, -2, -3];
// let newArr = '';
//
// function createNewArr(){
//     for(let i of arr){
//         if(i < 0){
//             continue;
//         }
//
//         newArr = newArr + i;
//     }
//
//     alert(newArr);
// }
//
// createNewArr(arr);

let str = '';
for (let i = 0; i < 7; i++) {
    console.log(str += "#");
}