// comentarios
var nombre; //declaracion (var)
//   console.log(nombre);
var nombre = "Miguel"; //asiganado un valor
//   console.log(nombre);
nombre = 3; //reasigando un valor
//   console.log(nombre);
let nombre2 = "Agustin"; //inicializacion
let nombre3;
const PI = 3.14159; //no se puede reasignar el valor
const GRAVEDAD = 9.8;
//salidas
//   console.log(GRAVEDAD);
//   alert("Hola")
//   alert(7)
//   entrada
// nombre3 = prompt("Ingresa tu nombre", "juan");
// let salir = confirm("Estas seguro que desdas salir?");

// console.log(nombre3);
// console.log(salir)
// Literals ``

// console.log("Hola" + nombre3 + "Como estas?");
// console.log("Hola",nombre3, "Como estas?");
// console.log(`Hola
//     ${nombre3}
//     como estas?`);

//CUANDO USO CONST
const array = [];
array.push(1, 4, 6, 8,0,8);
console.log(array);
// array = 9;
// console.log(array);
function saludo(params) {
  console.log(`Hola ${params}`);
}

const saludo2 = function (params) {
  console.log(`Hola ${params}`);
};
// saludo2=""
saludo2("juan");
saludo2("juan");

const saludo3 = (params) => {
  console.log(`Hola ${params}`);
};
saludo3("PEPE");

array.join("-");
console.log(array.join(","));
console.log(array.indexOf(8));
console.log(array.includes(4));
console.log(array.indexOf(4));


