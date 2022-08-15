// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array = [25, 15, 45, 15, 15, 'hallo', 'world', 'bla', true, false];
// for (const arrayElement of array) {
//     console.log(arrayElement)
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 25;
// array[1] = 5;
// array[2] = 1;
// array[3] = 'bla';
// array[4] = 15;
// array[5] = 'hallo';
// array[6] = 31;
// array[7] = true;
// console.log(array)

// - є масив
// let array = [2,17,13,6,22,31,45,66,100,-18];
// console.log(array)
// 1. перебрати його циклом while

// i = 0;
// while (i < array.length) {
//     console.log(`${array[i]}`)
//     i++
// }

// //     2. перебрати його циклом for
// for (const number of array) {
//     document.write(`${number}`);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i < array.length) {
//    if ( i % 2 )
//     console.log(`${array[i]}`)
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (i % 2) {
//         console.log(arrayElement);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while (i < array.length) {
//     if (!(i%2) && i !== 0) {
//         console.log(array[i]);
//     }
//
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (!(i % 2) && i !== 0) {
//         console.log(arrayElement);
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// //
// //
// // for (let number of array) {
// //     if (!(number % 3)) {
// //         let a = number;
// //         a = 'okten';
// //         number = a;
// //         console.log(number);
// //     } else {
// //         console.log(number);
// //     }
// // }

// for (let i = array.length - 1; i >= 0; i--) {
//     let number = array[i];
//         if (!(number % 3)) {
//         let a = number;
//         a = 'okten';
//         number = a;
//         console.log(number);
//     } else {
//         console.log(number);
//     }
// }


// 8. вивести масив в зворотньому порядку.

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (const number of array) {
//     console.log(number);
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [0, 17, 13, 'hello', 22, false, 'world', 66, 100, true];
//
// for (const arrayElement of array) {
//     console.log(arrayElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = [0, 17, 13, 'hello', 22, false, 'world', 66, 100, true];
// for (const arrayElement of array) {
//     console.log(!!arrayElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [0, 17, 13, 'hello', 22, false, 'world', 66, 100, true];
// for (const arrayElement of array) {
//     if (typeof arrayElement === "number") {
//         console.log(arrayElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [0, 17, 13, 'hello', 22, false, 'world', 66, 100, true];
//
// for (const arrayElement of array) {
//     if (typeof arrayElement === "string") {
//         console.log(arrayElement);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let a = [];
// for (let i = 0; i < 10; i++) {
//     const aElement = a[i];
//    a[i] = (i+1);
// }
// console.log(a);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     const arrayElement = [i];
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    book1 = {name: 'Drakula', numberofpages: 153, avtor: 'Брем Стокер', genre: ['жахи', 'готичний роман']},
    book2 = {name: 'Drak', numberofpages: 223, avtor: 'Девіт Вітам', genre: ['малодрама', 'роман', 'драма']},
    book3 = {name: 'Dra', numberofpages: 556, avtor: 'Віллям Гам', genre: ['детектив', 'жахи', 'драма', 'роман']},
]


// -знайти наібльшу книжку.

// let max = 0;
// let maxbook = 'str';
//
//
// for (const book of books) {
//     if (max < book.numberofpages) {
//         max = book.numberofpages;
//         maxbook = book;
//     }
// }
// console.log(maxbook);

// - знайти книжку/ки з найбільшою кількістю жанрів

// let max = books[0].genre.length;
// let a = 0;
// let maxGenre = '';
//
//
// for (const book of books) {
//     if (a < book.genre.length) {
//         a = book.genre.length;
//         maxGenre = book;
//     }
// }
// console.log(maxGenre);

// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор


