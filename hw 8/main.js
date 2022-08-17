// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// let Array = [
//     user1 = new User(1, 'Saha', 'Petrov', 'qwe@qwe.com', 252525),
//     user2 = new User(2, 'Ivan', 'Ser', 'fdf@qwe.com', 382565),
//     user3 = new User(3, 'Petro', 'Ver', 'asdf@qwe.com', 2525325525),
//     user4 = new User(4, 'Stepan', 'Amon', 'gfdfg@qwe.com', 52555),
//     user5 = new User(5, 'Sergii', 'QWER', 'sdf@qwae.com', 879865),
//     user6 = new User(6, 'Mark', 'Ptop', 'ffgf@qwe.com', 354534),
//     user7 = new User(7, 'Luka', 'Petr', 'qfde@qwe.com', 6676534),
//     user8 = new User(8, 'Ivan', 'Pov', 'ge@qwe.com', 34377),
//     user9 = new User(9, 'Andrii', 'Rrov', 'qwhghe@qwe.com', 357533),
//     user10 = new User(10, 'Max', 'PKFv', 'jkjqwe@qwe.com', 356373),
//
//
// ];
//
// console.log(Array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let evenId = Array.filter(value => value.id%2 === 0);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortId = Array.sort((a, b) => b.id - a.id);
// console.log(sortId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.oprder = order;
//     }
// }
//
// let arrayClient = [
//     client1 = new Client(1, 'Saha', 'Petrov', 'qwe@qwe.com', 252525,['milk']),
//     client2 = new Client(2, 'Ivan', 'Ser', 'fdf@qwe.com', 382565,['milk','vegetables']),
//     client3 = new Client(3, 'Petro', 'Ver', 'asdf@qwe.com', 2525325525,['milk','vegetables']),
//     client4 = new Client(4, 'Stepan', 'Amon', 'gfdfg@qwe.com', 52555,['milk','vegetables']),
//     client5 = new Client(5, 'Sergii', 'QWER', 'sdf@qwae.com', 879865,['milk','vegetables','fruits']),
//     client6 = new Client(6, 'Mark', 'Ptop', 'ffgf@qwe.com', 354534,['milk','vegetables','fruit']),
//     client7 = new Client(7, 'Luka', 'Petr', 'qfde@qwe.com', 6676534,['milk','vegetables','fruits','bread']),
//     client8 = new Client(8, 'Ivan', 'Pov', 'ge@qwe.com', 34377,['milk','vegetables','fruits','bread']),
//     client9 = new Client(9, 'Andrii', 'Rrov', 'qwhghe@qwe.com', 357533,['milk','freits','vegerables','bread','wather']),
//     client10 = new Client(10, 'Max', 'PKFv', 'jkjqwe@qwe.com', 356373,['milk','vegetables','fruits','bread','water']),
// ]
//
//

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по" кількості товарів в полі order по зростанню. (sort)
//
// arrayClient.sort((a, b) => a.oprder.length - b.oprder.length);
// console.log(arrayClient);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, maker, year, maxSpeed, engine) {
//
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function (speed) {
//         console.log(`їдемо зі швидкістю ${speed}км. на годину`);
//     }
//     this.info = function () {
//         console.log(`model - ${this.model}; maker - ${this.maker}; years - ${this.year}; maxSpeed - ${this.maxSpeed}km/h; enqine - ${this.engine} `)
//     }
//     this.ncreaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//
//     }
//     this.chanqeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDrive = function (driver) {
//         this.driver = driver;
//
//     }
//
// }
//
// let car = new Car('Fiesta', 'Ford', '2004', 160, 1.4,);
// // car.drive(130)
// // car.info()
// // car.enqineCapacity(170);
// // car.info()
// // car.chanqeYear(2008);
// // car.info()
// // car.addDrive({name:'max',age: 25});
// // console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//
//
//     constructor(model, maker, year, maxSpeed, engine) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     driver = function (speed) {
//         console.log(`їдемо зі швидкістю ${speed}км. на годину`);
//     }
//     info = function () {
//         console.log(`model - ${this.model}; maker - ${this.maker}; years - ${this.year}; maxSpeed - ${this.maxSpeed}km/h; enqine - ${this.engine} `)
//     }
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     addDriver = function (driver) {
//         this.driver = driver;
//     }
//
//
// }
//
// let car = new Car('Nisan', 'Qashqai', 2009, 160, 1.5);
//
// console.log(car);
// car.driver(120);
// car.info()
// car.increaseMaxSpeed(180);
// car.info()
// car.changeYear(2020);
// car.info()
// car.addDriver({name: 'Kilai', age: 25})
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelushka {
//
//     constructor(name, age, sizeLeg) {
//         this.name = name;
//         this.age = age;
//         this.sizeLeg = sizeLeg;
//     }
// }
//
//
// let array = [
//     popelushka1 = new Popelushka('Hala',25,42),
//     popelushka2 = new Popelushka('Ira',19,41),
//     popelushka3 = new Popelushka('Saha',35,40),
//     popelushka4 = new Popelushka('Vika',42,39),
//     popelushka5 = new Popelushka('Vira',45,39),
//     popelushka6 = new Popelushka('Masha',18,38),
//     popelushka7 = new Popelushka('Nela',35,38),
//     popelushka8 = new Popelushka('Sveta',19,37),
//     popelushka9 = new Popelushka('Ivanna',22,37),
//     popelushka10 = new Popelushka('Natalia',21,36),
// ]
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prins {
//
//
//     constructor(name, age, findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//     }
// }
//
// let prins = new Prins('Vasy',30,36);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// // for (const popelushka of array) {
// //     if (popelushka.sizeLeg === prins.findShoes) {
// //         console.log(popelushka);
// //     }
// // }
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// // let popelushkas = array.filter(value => value.sizeLeg === prins.findShoes);
// // console.log(popelushkas);