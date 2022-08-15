// - Знайти та вивести довижину настипних стрінгових значень

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.substring(1, 13));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//      let str = 'Ревуть воли як ясла повні';
//
// let arr = str.split(' '); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let set = [10,8,-7,55,987,-1011,0,1050,0];
//
// const a = set.map(value => value + '');
// console.log(a);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//     let nums = [11,21,3];
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         array.sort((a, b) => b - a);
//     }
//         return array;
// }
//    console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(coursesAndDurationArray);
// let find = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(find);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '',  '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let packCard = [
    {cardSuit: 'spade', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'diamond', value: 6, color:'red'},
    {cardSuit: 'heard', value: 6, color:'red'},
    {cardSuit: 'spade', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'diamond', value: 7, color:'red'},
    {cardSuit: 'heard', value: 7, color:'red'},
    {cardSuit: 'spade', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'diamond', value: 8, color:'red'},
    {cardSuit: 'heard', value: 8, color:'red'},
    {cardSuit: 'spade', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'diamond', value: 9, color:'red'},
    {cardSuit: 'heard', value: 9, color:'red'},
    {cardSuit: 'spade', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'diamond', value: 10, color:'red'},
    {cardSuit: 'heard', value: 10, color:'red'},
    {cardSuit: 'spade', value: 'jack', color:'black'},
    {cardSuit: 'clubs', value: 'jack', color:'black'},
    {cardSuit: 'diamond', value: 'jack', color:'red'},
    {cardSuit: 'heard', value: 'jack', color:'red'},
    {cardSuit: 'spade', value: 'queen', color:'black'},
    {cardSuit: 'clubs', value: 'queen', color:'black'},
    {cardSuit: 'diamond', value: 'queen', color:'red'},
    {cardSuit: 'heard', value: 'queen', color:'red'},
    {cardSuit: 'spade', value: 'king', color:'black'},
    {cardSuit: 'clubs', value: 'king', color:'black'},
    {cardSuit: 'diamond', value: 'king', color:'red'},
    {cardSuit: 'heard', value: 'king', color:'red'},
    {cardSuit: 'spade', value: 'ace', color:'black'},
    {cardSuit: 'clubs', value: 'ace', color:'black'},
    {cardSuit: 'diamond', value: 'ace', color:'red'},
    {cardSuit: 'heard', value: 'ace', color:'red'},
    {value: 'joker', color:'black'},
    {value: 'joker', color:'red'},
]

// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// let aceSpade = packCard.find(value => value.value === 'ace' && value.cardSuit === 'spade');
// console.log(aceSpade);
//
// let six = packCard.filter(value => value.value === 6);
// console.log(six);
//
// let redCarts = packCard.filter(value => value.color === 'red');
// console.log(redCarts);
//
// let cartsDiamant = packCard.filter(value => value.cardSuit === 'diamond');
// console.log(cartsDiamant);
// //

// console.log(packCard.filter(value => value.value > 8 && value.cardSuit === 'clubs' || typeof value.value === 'string' && value.cardSuit === 'clubs'));


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {spades:[], diamonds:[], hearts:[], clubs:[]}

// let red = packCard.reduce(function (accumulator,user ){
//     if (user.cardSuit === 'spade') {
//         accumulator.spades.push(user);
//     }else if (user.cardSuit === 'clubs') {
//         accumulator.clubs.push(user);
//     }
//     else if (user.cardSuit === 'heard') {
//         accumulator.hearts.push(user);
//     }else if (user.cardSuit === 'diamond'){
//         accumulator.diamonds.push(user);
//     }
//     return accumulator;
// },{spades:[], diamonds:[], hearts:[], clubs:[]})
//
// console.log(red);