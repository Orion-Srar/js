
let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');

let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

let father = document.createElement('div');
father.setAttribute('id','father')
wrap.appendChild(father);


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(details => {

        function constructor(user) {
            for (const userKey in user) {

                if (typeof user[userKey] === "string" || typeof user[userKey] === "number"){

                    let divElement = document.createElement('div');
                    divElement.innerHTML = `<b>${userKey}:</b> ${user[userKey]}`
                    father.appendChild(divElement);
                }else {
                    let divElement = document.createElement('div');
                    divElement.innerHTML = `<b>${userKey}:</b>`
                    father.appendChild(divElement)
                    constructor(user[userKey])
                }
            }
        }
        constructor(details)
    })



let button = document.createElement('button');
button.classList.add('button2');
button.innerText = 'Post of current user'
wrap.appendChild(button);

let titlesUsers = document.createElement('div');
titlesUsers.setAttribute('id','titleUsers');
wrap.appendChild(titlesUsers);

button.onclick = () =>{

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {


            for (const post of posts) {

                let title = document.createElement('div');
                title.setAttribute('id','title')
                titlesUsers.appendChild(title);

                let p = document.createElement('p');
                p.innerText = post.title
                title.appendChild(p);

                let buttonToPost = document.createElement('button');
                buttonToPost.classList.add('button3')
                buttonToPost.innerText = 'Details of post'
                title.appendChild(buttonToPost)
                buttonToPost.onclick = () => {
                    location.href = `post-details.html?id=${post.id}`
                }
            }
        })

}






