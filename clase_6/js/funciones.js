// funciones de orden superior
function porCadaUno(arr, fn) {
  for (const element of arr) {
    fn(element); //console.log(element), alert(element)
  }
}
const nums = [1, 4, 2, 77, 6, -50, 4];
const frutas = ["manzana", "pera", "bananas"];
// porCadaUno(nums, console.log);
// porCadaUno(nums, alert);
// porCadaUno(frutas, alert);
//
let cuadruple = [];
function porCuatro(n) {
  return cuadruple.push(n * 4);
}
console.log(nums);

//porCadaUno(nums, porCuatro);//v1
porCadaUno(nums, (n) => {
  cuadruple.push(n * 4);
});
console.log(cuadruple);
