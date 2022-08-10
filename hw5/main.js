// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//     let res = a * b;
//     return res;
// }
// console.log(area(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaRound(r) {
//     let res =Math.PI * r ** 2;
//     return Math.round(res);
// }
// console.log(areaRound(15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinser(h, r) {
//     let res = (2 * Math.PI * r ** 2) + (2 * Math.PI * r * h);
//     return Math.round(res);
// }
// console.log(areaCylinser(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function enterArray(array) {
//            for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
//
// }
// enterArray(numbers);

// - створити xфункцію яка створює параграф з текстом. Текст задати через аргумент
// function textPrinter(text) {
//     document.write(`<div>${text}</div>`)
// }
// textPrinter('створити функцію яка приймає масив обєктів з наступними полями id')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function writer(text) {
//     document.write(`<ul>`)
//     document.write(`
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>`)
//     document.write(`</ul>`)
// }
// writer('Hallo')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function writer(text, a) {
//     document.write(`<ul>`)
//
//     for (let i = 0; i < a; i++) {
//          document.write(`<li>${text}</li>`);
//
//         }
//     document.write(`</ul>`)
//
// }
//
//  writer('hallo',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [2, 3, 8, 'hallo', true];
//
// function receiveArray(Array) {
//     document.write(`<ul>`)
//     for (const arrayElement of Array) {
//         document.write(`<ol> ${arrayElement}</ol>`)
//     }
//     document.write(`</ul>`)
//
// }
// receiveArray(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1234, name: 'Andrii', age: 30},
//     {id: 1854, name: 'Sasha', age: 26},
//     {id: 9253, name: 'Ivan', age: 28},
//     {id: 6934, name: 'Petro', age: 31}
// ];
//
// function receiveArray (Array) {
//     for (const arrayElement of Array) {
//         document.write(`<div> Name: ${arrayElement.name} *** Id: ${arrayElement.id} *** Age: ${arrayElement.age}</div>`)
//
//     }
// }
// console.log(receiveArray(users));


// - створити функцію яка повертає найменьше число з масиву
// let numbers = [ 15, 23,6, 87, 98,-100,-75];
//
// function minNumber(Array) {
//     let min = Array[0];
//     for (let arrayElement of Array) {
//         if (arrayElement < min) {
//             min = arrayElement ;
//         }
//
//     }
//     return min;
// }
//
// console.log(minNumber(numbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 3, 4, 25];
//
// function sumArray(Array) {
//     let sum = 0;
//     for (let arrayElement of Array) {
//         sum1 = arrayElement + sum;
//         sum = sum1;
//     }
//     console.log(sum);
// }
// sumArray(arr);