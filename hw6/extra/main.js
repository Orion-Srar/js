// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

//     let str0 = 'Каждый охотник желает знать';
//
// delete_characters = (str, length) => {
//     let a = str.substring(0, length);
//     return a
//
// };
//
// console.log(delete_characters(str0, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//     let str = "HTML JavaScript PHP";
// insert_dash = str => {
//     let s = str.replaceAll(' ', '-').toUpperCase();
//     return s;
//
// };
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// foo = str => {
//
//     return str.replace(str.charAt(0),str.charAt(0).toUpperCase());
// };
//
// console.log(foo('andrii boiko'));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// foo = n => {
//     let split = n.split(/[-._]/);
//     let s = split.join(' ');
//     return s
//     // console.log(split);
// };
// console.log(foo(n1));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// foo = () => { return  Math.round(Math.random() * 100)};
// console.log(foo());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// foo = () => {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array
// };
// let a = foo();
// console.log(a.sort((a1, b) => a1 - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// let arr = [75, 78, 84, 25, 15, 56, 59, 87, 78, 68];
//
//
// let pair = arr.filter(value => {
//     if (!(value%2)) {
//         return value
//     }
// });
//
// console.log(pair);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let capitalize = (str) => {
//     let finish =[];
//     strArray = str.split(' ');
//     for (const Element of strArray) {
//         let first = Element.charAt(0).toUpperCase();
//         let next = Element.substring(1);
//         glue = first.concat(next);
//         finish.push(glue);
//     }
//
//     return finish.join(' ');
//
// };
//
// console.log(capitalize('andrii petro adfh lkfdk kdfjdf'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let validator = email => {
//     let emailArray = email.split('@');
//     if (emailArray.length !== 2) {
//         return false;
//     }
//     let [name, fullDomen] = emailArray;
//
//     let [beforeDot, afterDot] = fullDomen.split('.');
//     if (beforeDot.length < 2 || !afterDot || !name) {
//         return false;
//     }
//     return true
// };
//
// console.log(validator('someeMAIL@id.ua'));


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// let sort = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(sort);

//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// cound = (str,stringsearch) => {
//     let numb = 0;
//     for (const strElement of str) {
//         if (strElement === stringsearch) {
//            numb ++;
//         }
//     }
//     return numb;
//
// };
// console.log(cound('Астрономия это наука о небесных объектах', 'н'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// cutString = (str, n) => {
//     let araay = str.split(' ');
//     return  araay.filter((value, index) => index < n).join(' ');
//
//
// };
//
// console.log(cutString('Сила тяжести приложена к центру масс тела', 5));





