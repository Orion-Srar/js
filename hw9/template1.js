//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main', 'Products', 'About us', 'Contacts'];

let ul = document.getElementsByClassName('menu')[0];
for (const Element of array) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = Element;

}