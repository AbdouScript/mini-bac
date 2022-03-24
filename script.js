// let users = ['Marks', 'James', 'Peter', 'Jane', 'Mary'];
// function addUsers(){
//     let template = users.map(user => `<li>${user}</li>`).join('\n');
//     document.querySelector('ul').innerHTML = template;
// }
// addUsers();

let ul = document.getElementById('liste');
let btnAdd = document.getElementById('toto');
let input = document.getElementById('ecrire');
btnAdd.addEventListener('click', () =>{
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';
    console.log();       
});