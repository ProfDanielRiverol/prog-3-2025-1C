// console.log(document.head);
// console.log(document.body);
// seleccionar elementos o nodos
// console.log(document.getElementsByTagName('h1')[0]);
const titulo = document.getElementsByTagName("h1")[0];
// console.log(titulo.innerText ="Clase 7");
// console.log(titulo.textContent = "JAVASCRIPT RULES");
const divs = document.getElementsByTagName("div");
// console.log(divs);
const uls = document.getElementsByTagName("ul");
// console.log(uls);
const lista = document.getElementsByClassName("lista");
// console.log(lista[0]);
// console.log(lista[1].innerText);
// console.log(lista[2]);

// seleccionar por id
const listaNombres = document.getElementById("nombres");

// console.log(listaNombres);
const lista1 = lista[0];
console.log(lista1);
const paises = document.getElementsByClassName("pais");
paises[0].innerHTML = "<strong>FINLANDIA</strong>";
// console.log();

// crear elementos

const parrafo = document.createElement("p");
parrafo.innerText = "Hola soy parrafo creado desde js";
console.log(parrafo.innerText);
const contenedor = document.getElementById("contenedor");

contenedor.prepend(parrafo);
// document.body.appendChild(parrafo)
const personas = [
  "Juan",
  "Emma",
  "Carlos",
  "Olivia",
  "Pedro",
  "Sophia",
  "Luis",
  "Diego",
  "Isabella",
  "Miguel",
];
personas.push("Pepe", "Fiorella", "Martin", "Lucia");

let nombre = prompt("Ingresa tu nombre");
personas.push(nombre)
for (const element of personas) {
  const li = document.createElement("li");
  li.innerText = element;
//   console.log(li.innerText);
  listaNombres.append(li);
}
// crear un script que reciba nombres y los represente en una lista termiar el ingreso cuando el usario ingrese 0