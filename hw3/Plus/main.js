// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// let x = friends.length;
//
// if (x >= 3) {
//     console.log('великий масив, в якому  3 і більше елементи');
// } else {
//     console.log('маленький масив, в якому менше 3-х елементів.');
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let a = 11;
// let b = 15;
// let c = 14;
//
//
// if(b < a || b < c) {
//     if (b > a || b > c){
//         console.log('b');
//     }
// } else if (a < b || a < c) {
//     if (a > b || a > c) {
//         console.log('a');
//     }
// }
// else {
//     console.log('c');
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let a = 4;
// let b = 1;
// let result = (a + b < 4) ? 'мало' : 'багато';
// console.log(result)
// // if (a + b < 4) {
// //     result = 'Мало';
// // } else {
// //     result = 'Багато';
// // }


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = false ? 'virno' : 'nevirno';
// console.log(test);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let a = prompt('Яка «офіційна» назва JavaScript?');
// console.log(a);
//
// if (a === 'ECMAScript') {
//     console.log('Правильно');
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let kv = +prompt('Vedit nomer kvartyry');
// if (kv > 0 && kv < 21) {
//     console.log('perhyi pidizd');
// } else if (kv > 20 && kv < 49) {
//     console.log('drugiy pidizd');
// }else if (kv > 48 && kv < 91) {
//     console.log('3 pidizd');
// } else {
//     console.log('nema haty')
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let x = +prompt();
// let number = x===10 ? "+" : '-';
// console.log(number);

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let a = +prompt('chyslo vid 1 do 5');
//
// switch (a) {
//     case 1:
//         console.log('Avto');
//         break;
//     case 2:
//         console.log('Moto');
//         break;
//     case 3:
//         console.log('Telefon');
//         break;
//     case 4:
//         console.log('hernia');
//         break;
//     case 5:
//         console.log('ashar');
//         break;
//
// }

//  let expr = prompt('Add produkt')
// switch (expr) {
//     case "Oranges":
//         console.log("Oranges are $0.59 a pound.");
//         break;
//     case "Apples":
//         console.log("Apples are $0.32 a pound.");
//         break;
//     case "Bananas":
//         console.log("Bananas are $0.48 a pound.");
//         break;
//     case "Cherries":
//         console.log("Cherries are $3.00 a pound.");
//         break;
//     case "Mangoes":
//     case "Papayas":
//         console.log("Mangoes and papayas are $2.79 a pound.");
//         break;
//     default:
//         console.log("Sorry, we are out of " + expr + ".");
// }
//
// console.log("Is there anything else you'd like?");




// function square (number) {
//  return number * number;
// }
// let q = square(4);
// console.log(q);

// let factorial = function fac(n) {
//  return n < 2 ? 1 : n * fac(n - 1);
// };
// console.log(factorial(5));

let num1 = 20;
let