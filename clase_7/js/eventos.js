const ingreso = document.querySelector("input#ingreso"),
  caja = document.querySelector(".caja"),
  btnSearch = document.querySelector("button#btnSearch");

// ingreso.value = 12
// console.log(caja);
let contador = 0;
// caja.addEventListener('click',()=>{
//     contador++
//     console.log('Hiciste click en la caja', contador);

// })
// prefijo-nombre evento
// caja.onclick = () => {
//   contador++;
//   console.log("Hiciste click en la caja", contador);
// };

// caja.addEventListener('mousedown',()=>{
//     console.log('Presionaste el boton del mouse');

// })
// caja.addEventListener('mouseup',()=>{
//     console.log('Soltaste el boton del mouse');

// })
// caja.addEventListener("mouseenter", () => {
//   console.log("entraste a la caja");
//   caja.style.backgroundImage = "url(./img/estados.jpg)";
// });
// caja.addEventListener("mouseleave", () => {
//   caja.style.backgroundImage = "url(./img/australia.jpg)";
//   console.log("saliste a la caja");
// });click
// caja.addEventListener("", () => {
//   caja.style.backgroundImage = "url(./img/pum.png)";
//   console.log("saliste a la caja");
// });

// ingreso.addEventListener('keydown',()=>{
//     console.log(ingreso.value);

// })
// ingreso.addEventListener('keyup',()=>{
//     console.log(ingreso.value);

// })
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}

function renderCard(servicio) {
  const contenedor = document.querySelector("#contenedor");
  const { id, nombre, precio, img } = servicio;

  contenedor.innerHTML = `<div class="card">
      <img src="./img/${img}" alt="">
      <h2>${nombre}</h2>
      <p>$${precio}</p>
      <button id="${id}">Comprar</button>
    </div>`;
}
// ingreso.addEventListener("input", () => {
//   console.log(ingreso.value.length);
//   if (ingreso.value.length >= 3) {
//     const servicioEncontrado = buscarServicio(servicios, ingreso.value);
//     console.log(servicioEncontrado);
//   }
// });
btnSearch.addEventListener("click", () => {
  const servicioEncontrado = buscarServicio(servicios, ingreso.value);
  renderCard(servicioEncontrado);
  //   console.log(servicioEncontrado);
});
// submit
const formulario = document.getElementById("form");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target); //formulario
  console.log(event.target[0].value); //input nombre
  console.log(event.target[1].value); //input password
  //   console.log(event.target[2]); //input type submit
  const [nombre, password] = event.target;
  const usuario = {
    nombre: nombre.value,
    password: password.value,
  };
  console.log(usuario);
});
