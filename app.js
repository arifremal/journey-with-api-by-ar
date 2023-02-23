function load(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
function load(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => user(json))
}

function user(json) {
    
console.log(json);
    
}