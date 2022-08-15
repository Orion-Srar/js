// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     }else if ( b < a && b < c) {
//         console.log(b);
//     }else if (c < b && a > c) {
//         console.log(c);
//     }
// };
// minNumber(30,15,25);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let minNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if ( b > a && b > c) {
//         console.log(b);
//     }else if (c > b && c > a) {
//         console.log(c);
//     }
// };
// minNumber(30,15,25);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1, 2, 3, 4, 5, -2];
//
// const receive = array => {
//     let max = array[0];
//     for (let arrayElement of array) {
//         if (max<arrayElement) {
//             max = arrayElement;
//         }
//     }
//     return max;
//     }
//
// console.log(receive(arr));


// - створити функцію яка повертає найменьше число з масиву

// let arr = [1, 2, 3, 4, 5, -2];
//
// const receive = array => {
//     let min = array[0];
//     for (let arrayElement of array) {
//         if (min>arrayElement) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
// console.log(receive(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1, 2, 3, 4, 5,6];
//
// const sumArray = array => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(sumArray(arr));

// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 100;
// let a = 1;
// let array = [];
// array.length = n;
//
// for (let i = 0; i < array.length-1; i++) {
//     const arrayElement = array[i];
//     document.write(`<div>${a++}</div>`);
// }

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// function foo(a, b) {
//     let arr = [];
//     if (a < b) {
//         arr[0] = a;
//         arr.length = b;
//         for (let i = a; i <= arr.length; i++) {
//             document.write(`<div>${i}</div>`);
//         }
//
//     } else if (a > b) {
//         arr[0] = a;
//         arr.length = a;
//         for (let i = a; i >=b; i--) {
//             document.write(`<div>${i}</div>`);
//
//         }
//     }
// }
//
// foo(100,1);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [9, 8, 0, 4];
//
// function foo(array, i) {
//     let tab = array[i];
//     array[i] = array[i + 1];
//     array [i + 1] = tab;
//     return array;
// }
// console.log(foo(arr,2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1, 0, 6, 0, 3];

// let n1 = [];
// let n2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         n1.push(arr[i]);
//     }else {
//         n2.push(arr[i]);
//     }
// }
// console.log(n2.concat(n1));
//
// console.log(arr.indexOf(0));

// let n1 = arr.filter(value => value !== 0);
// let n2 = arr.filter(value => value === 0);
// let n3 = n1.concat(n2)
// console.log(n3);


