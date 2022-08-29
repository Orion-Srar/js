
let url = new URL(location.href);
let id = url.searchParams.get('id');

let wrap = document.createElement('div');
wrap.classList.add('wrap-post')
document.body.appendChild(wrap)

let post = document.createElement('div');
post.classList.add('post');
wrap.appendChild(post)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts =>{

        for (const postKey in posts) {

            let element = document.createElement('div');
            element.innerHTML = `<b>${postKey}:</b> ${posts[postKey]}`
            post.appendChild(element);
        }
    } )

let titleComments = document.createElement('h2');
titleComments.innerText = 'Comments of this post';
titleComments.classList.add('title-comments');
wrap.appendChild(titleComments);

let commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments');
wrap.appendChild(commentsDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {

        for (const comment of comments) {

            let comment1 = document.createElement('div');
            comment1.classList.add('comment')
            commentsDiv.appendChild(comment1);

            for (const commentKey in comment) {

                let item = document.createElement('div');
                item.classList.add('item');
                item.innerHTML = `<b>${commentKey}:</b> ${comment[commentKey]}`
                comment1.appendChild(item);
            }
        }
    })
