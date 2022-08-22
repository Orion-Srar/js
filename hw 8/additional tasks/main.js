// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// function User(id, name, username, email, street, suit, city, zipcode, lat,lng, phone, website, companyname, catchPhrase, bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.addres = {street:street,suit:suit,city:city,zipcode:zipcode,geo:{lat:lat,lng:lng}};
//     this.phone = phone;
//     this.website = website;
//     this.company = {companyname:companyname,catchPhrase:catchPhrase,bs:bs};
//
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(user);

// class User {
//     constructor(id, name, username, email, street, suit, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.addres = {street: street, suit: suit, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
//         this.phone = phone;
//         this.website = website;
//         this.company = {companyname: companyname, catchPhrase: catchPhrase, bs: bs};
//
//     }
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(user);

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту.

// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag {
//     constructor(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [{titleOfAttr1: titleOfAttr1,actionOfAttr1: actionOfAttr1},{titleOfAttr2:titleOfAttr2,actionOfAttr2:actionOfAttr2}]
//
//     }
// }
//
// let a = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.','accesskey','Активация ссылки с помощью комбинации клавиш.','coords','Устанавливает координаты активной области.');
// console.log(a);


// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let area = new Tag('area',`Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,'accesskey', 'Переход к области с помощью комбинации клавиш');
// console.log(area);
//
// let a = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',[{titleOfAttr:'accesskey',actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'},{titleOfAttr:'coords',actionOfAttr:'Устанавливает координаты активной области.'}]);
// console.log(a);



const d = Math.floor((new Date('2023-01-01T00:00:00') - new Date()) / 1000);
console.log(d);



