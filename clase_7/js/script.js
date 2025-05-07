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

// let nombre = prompt("Ingresa tu nombre");
// personas.push(nombre)
for (const element of personas) {
  const li = document.createElement("li");
  li.innerText = element;
//   console.log(li.innerText);
  listaNombres.append(li);
}
// crear un script que reciba nombres y los represente en una lista termiar el ingreso cuando el usario ingrese 0


const productos = [
  { id: 1, nombre: "arroz integral", precio: 360 },
  { id: 2, nombre: "papa", precio: 195 },
  { id: 3, nombre: "tomate", precio: 525 },
  { id: 4, nombre: "morrón", precio: 1800 },
  { id: 5, nombre: "pan", precio: 570 },
  { id: 6, nombre: "aceitunas", precio: 480 },
  { id: 7, nombre: "fideo", precio: 525 },
  { id: 8, nombre: "arroz", precio: 1050 },
  { id: 9, nombre: "avena", precio: 600 },
  { id: 10, nombre: "cebolla", precio: 135 },
  { id: 11, nombre: "zanahoria", precio: 270 },
  { id: 12, nombre: "brócoli", precio: 675 },
  { id: 13, nombre: "lechuga", precio: 180 },
  { id: 14, nombre: "espaguetis", precio: 525 },
];