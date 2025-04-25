console.log(
  "\n\n\x1b[35m------------------------------------------------------------\x1b[0m\n\n"
);

// filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
/**
El método .filter() permite crear un nuevo array con todos los elementos del array original
que cumplan con una condición (retornada como true por el callback). Es importante destacar 
que este método ignora los espacios vacíos ("holes") en arrays dispersos. [1,4, ,5, ,6, 3, ]
 */

let arr = [2, 4, 675, 34, 32];

let copy = arr.filter((v, i, arr) => {
  return v % 2 === 0;
});

console.log(arr);
console.log(copy);

// Filtrar objetos del array según propiedad
const personas = [
  { nombre: "Luz", edad: 16 },
  { nombre: "Pedro", edad: 22 },
  {},
  { nombre: "Marina", edad: 19 },
  { nombre: "Sofía", edad: 15 },
];

let mayores = personas.filter((p) => p.edad >= 18);
console.log(personas);
console.log(mayores);

const productos = [
  { nombre: "Mouse", stock: 10 },
  { nombre: "Teclado" },
  { nombre: "Monitor", stock: 3 },
  { nombre: "Webcam", stock: 0 },
];

// Optional chaining "?."
// para evitar errores en objetos con claves ausentes.
let enStock = productos.filter((p) => p?.stock > 0);

console.log(productos);
console.log(enStock);

console.log(
  "\n\n\x1b[31m------------------------------------------------------------\x1b[0m\n\n"
);

// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
/**
 El método `.map()` transforma cada elemento del array original en un nuevo valor, devolviendo
 un nuevo array con los resultados de aplicar la función callback. A diferencia de `filter`, 
`map()` conserva la estructura del array, incluidos los huecos vacíos [ 1, 2, <1 empty item>, 3, <1 empty item>, 6]
 */

let num = [32, 45, 6, 2, 103, 545];

//Devuelve un array con el doble de cada valor
let numPorDos = num.map((n) => n * 2);

console.log(num);
console.log(numPorDos);

// Devuelve un array de booleanos indicando si cada número es par
let res = num.map((n) => n % 2 === 0);

console.log(res);

// Encadenamiento de map() para aplicar múltiples transformaciones en cadena
let res2 = num
  .map((n) => n + 1)
  .map((n) => n * 3)
  .map((n) => n.toString());

// Combinación de map() y filter() para manipular elementos e ignorar algunos índices
let res3 = num
  .map((n) => n + 1)
  .filter((_, i) => i % 2 !== 0)
  .map((n) => n * 3)
  .map((n) => n.toString());

console.log(res2);
console.log(res3);

console.log(
  "\n\n\x1b[34m------------------------------------------------------------\x1b[0m\n\n"
);

// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
/*
`.reduce()` es uno de los métodos más poderosos. Permite recorrer el array y acumular un valor 
según la lógica definida en el callback. Esta función reductora se aplicara sobre cada elemento del array (de izquierda a 
derecha) y devolverá un solo valor.
*/

const num2 = [1, 2, 3, 5, 6, 8];
console.log("\n", num2);

let sum = num2.reduce((acc, curr) => {
  console.log(`acumulado ${acc} , actual ${curr}`);
  return acc + curr;
}, 0); // Si no se especifica el valor inicial, sera el primer valor del array.

console.log(sum);


// cuenta la cantidad de concurrencias de una letra en el array
const letras = ["a", "b", "a", "c", "g", "a", "b"];

console.log(letras);

let conr = letras.reduce((acc, curr) => {
  console.log(acc);
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(conr);


// inventario
// Agrupar inventario por categoría y nombre, sumando cantidades.

const inventario = [
  { nombre: "muñeca", cantidad: 5, categoria: "juguetes" },
  { nombre: "auto", cantidad: 3, categoria: "juguetes" },
  { nombre: "pelota", cantidad: 2, categoria: "deportes" },
  { nombre: "auto", cantidad: 2, categoria: "juguetes" },
  { nombre: "raqueta", cantidad: 4, categoria: "deportes" },
  { nombre: "peluche", cantidad: 6, categoria: "juguetes" },
  { nombre: "balón de fútbol", cantidad: 3, categoria: "deportes" },
  { nombre: "patines", cantidad: 2, categoria: "deportes" },
  { nombre: "muñeco de acción", cantidad: 4, categoria: "juguetes" },
];

console.log(inventario);

let organizado = inventario.reduce((acc, curr) => {
  let categoria = acc[curr.categoria] || (acc[curr.categoria] = {});

  categoria[curr.nombre] = (categoria[curr.nombre] || 0) + curr.cantidad;

  return acc;
}, {});

console.table(organizado.juguetes);
console.table(organizado.deportes);

// sort(compareFn?: (a: T, b: T) => number): this;
