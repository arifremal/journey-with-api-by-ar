// function users2(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then (res=> res.json())
//     .then(data => userss(data))
// }

// function userss(data){

//     const ul = document.getElementById('user-lisa')
//    for (const ud of data){
//     console.log(ud.username);
//     const li = document.createElement('li')
//     li.innerText= ud
//     ul.appendChild(li)
//    }

// }

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res=>res.json())
    .then(data=> display (data))

}

function display (post){
    // console.log(post);
    const container = document.getElementById('container')
    for(const p of post){
        console.log(p);
        // p.classList(post)
        const li = document.createElement('div')
        li.classList.add('post')
        li.innerHTML=`
        <h4> User- ${p.id} </h4>
        <h4> Post title- ${p.title} </h4>
        <p> <strong>Post Body </strong> <br> ${p.body} </p>
        `
        container.appendChild(li)
    }


}

loadPost()