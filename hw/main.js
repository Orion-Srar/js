


fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {

        let father = document.createElement('div');
        father.setAttribute('id','father')
        document.body.appendChild(father);

        function constructor(user) {
            for (const userKey in user) {

                if (typeof user[userKey] === "string" || typeof user[userKey] === "number"){

                    let divElement = document.createElement('div');
                    divElement.innerHTML = `<p><b>${userKey}:</b> ${user[userKey]}</p>`
                    father.appendChild(divElement);
                }else {
                    let divElement = document.createElement('div');
                    divElement.innerHTML = `<b>${userKey}:</b>`
                    father.appendChild(divElement)
                    constructor(user[userKey])
                }
            }
        }
        constructor(user)
    })

//     for (const detailsKey in details) {
//
//         let divElement = document.createElement('div');
//         father.appendChild(divElement);
//
//         if (typeof details[detailsKey] === "number" || typeof details[detailsKey] === "string") {
//             divElement.innerHTML = `<b>${detailsKey}:</b> ${details[detailsKey]} `
//
//         } else if (typeof details[detailsKey] === "object") {
//             divElement.innerHTML = `<b>${detailsKey}:</b>`
//
//             for (const item in details[detailsKey]) {
//
//                 if (typeof details[detailsKey][item] === "string") {
//
//                     let divElement1 = document.createElement('div');
//                     divElement1.innerHTML = `<b>${item}:</b> ${details[detailsKey][item]} `;
//                     father.appendChild(divElement1);
//
//                 } else {
//
//                     let divElement1 = document.createElement('div');
//                     divElement1.innerHTML = `<b>${item}:</b>  `;
//                     father.appendChild(divElement1);
//
//                     for (const item2 in details[detailsKey][item]) {
//
//                         let li = document.createElement('div');
//                         li.innerText = `${item2}: ${details[detailsKey][item][item2]}`;
//                         divElement1.appendChild(li);
//
//
//                     }
//                 }
//             }
//
//         }
//     }
//
//
// })
