// Math
const nums = [1, 3, 2, 5, 1, 3, 10];
// console.log(Math.PI);
// console.log(Math.ceil(3.0001));
// console.log(Math.floor(3.9));
// console.log(Math.round(3.49));
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random() * 10 + 1));

let inicial=20
let final= 200

console.log(Math.floor(Math.random() * (final - inicial + 1)+ inicial));


const hexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let color=''
for (let i = 0; i < 6; i++) {
    let aleatorio= Math.floor(Math.random()* hexa.length)
    color = color + hexa[aleatorio]
    
}
// console.log(`#${color}`);

// generar una funcion que genere un token aleatorio de longitud parametrizable

// Date

const date=new Date()
console.log(`COPY 2004 - ${date.getFullYear()}`);
console.log(date.getDay());
console.log(date.getMonth()+1);
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

// usemos alguna libreria luxon moment

