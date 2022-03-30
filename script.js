let ul = document.getElementById("liste");
let btnAdd = document.getElementById("toto");
let input = document.getElementById("ecrire");

let ul1 = document.getElementById("liste1");
let btnAdd1 = document.getElementById("toto1");
let input1 = document.getElementById("ecrire1");

let ul2 = document.getElementById("liste2");
let btnAdd2 = document.getElementById("toto2");
let input2 = document.getElementById("ecrire2");

let ul3 = document.getElementById("liste3");
let btnAdd3 = document.getElementById("toto3");
let input3 = document.getElementById("ecrire3");

let ul4 = document.getElementById("liste4");
let btnAdd4 = document.getElementById("toto4");
let input4 = document.getElementById("ecrire4");

let ul5 = document.getElementById("liste5");
let btnAdd5 = document.getElementById("toto5");
let input5 = document.getElementById("ecrire5");

btnAdd.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li);
  input.value = "";
  console.log();
});
btnAdd1.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input1.value;
  ul1.appendChild(li);
  input1.value = "";
  console.log();
});

btnAdd2.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input2.value;
  ul2.appendChild(li);
  input2.value = "";
  console.log();
});

btnAdd3.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input3.value;
  ul3.appendChild(li);
  input3.value = "";
  console.log();
});
btnAdd4.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input4.value;
  ul4.appendChild(li);
  input4.value = "";
  console.log();
});
btnAdd5.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input5.value;
  ul5.appendChild(li);
  input5.value = "";
  console.log();
});
