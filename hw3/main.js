// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('Add number');
// if (x!==0){
//     console.log('Вірно');
// }
// else {
//     console.log('Невірно');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("Add number 0-59");
// if (time >= 0 && time < 15) {
//     console.log('перша')
// }
// else if (time >= 15 && time < 30) {
//     console.log('друга')
// }
// else if (time >= 30 && time < 45) {
//     console.log('третя')
// }
// else if (time >= 45 && time < 60) {
//     console.log('четверта')
// }
// else {
//     console.log("???")
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Add number 1-31');
// if (day > 0  && day < 10) {
//     console.log('перша')
// }
// else if (day >= 10 && day < 20) {
//     console.log('друга')
// }
// else if (day >= 20 && day <= 31) {
//     console.log('третя')
// }
// else {
//     console.log("???")
// }


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = +prompt('Day a week');
// switch (day) {
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         document.write('ERROR');
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('Add number a')
// let b = +prompt('Add number b')
// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// } else {
//     console.log('a = b');
// }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let y = 25;
// let x = y || "default";
// console.log(x);