const personas = [
  { nombre: "carlos", edad: 30 },
  { nombre: "ana laura", edad: 25 },
  { nombre: "lucía", edad: 35 },
  { nombre: "juan", edad: 20 },
];
personas.push({ nombre: "brisa", edad: 18 });
// console.table(personas);
console.log(personas);
// map
const nombreEnMayuscula1 = personas.map((persona) =>
  persona.nombre.toUpperCase()
);
const nombreEnMayuscula = personas.map((p) => ({
  nombre: p.nombre.toUpperCase(),
  edad: p.edad,
}));
console.log(nombreEnMayuscula);
// find
const encontrado = personas.find((persona) => persona.edad <= 23);

console.log(encontrado);

let nombreIngresado = prompt("Ingresa el nombre a buscar");
console.log(nombreIngresado);
function buscarPorNombre1(arr, nombre) {
  return arr.find(
    (persona) =>
      persona.nombre.localeCompare(nombre, "es", { sensitivity: "base" }) === 0
  );
}
function buscarPorNombre(arr, nombre) {
  //   return arr.find((p) => p.nombre === nombre);
  return arr.find((p) => p.nombre.includes(nombre.toLowerCase()));
}
function filtrarPorNombre(arr, nombre) {
  //   return arr.find((p) => p.nombre === nombre);
//   validar que ingreso sea minimo 3 caracteres
return arr.filter((p) => p.nombre.includes(nombre.toLowerCase()));
}

// console.log(buscarPorNombre(personas, nombreIngresado));
const filtrados = filtrarPorNombre(personas, nombreIngresado);

console.log(filtrados);
console.log(buscarPorNombre(filtrados, nombreIngresado));


