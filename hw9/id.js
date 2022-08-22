//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let buttons = document.getElementsByTagName('button');
button = buttons[0];

let div = document.getElementById('text');

button.onclick = function (e) {
   div.remove()
}

