// console.log('Calentar el agua');
// console.log('Preparar el mate');
// console.log('Disfrutar el mate');

// setTimeout()
// console.log('primera ejecucion');

// setTimeout(()=>{
//     console.log('segunda ejecucion');

// },0)

// console.log('tercera ejecucion');
const card = document.querySelector(".card");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2500);
  card.classList.add("active");
});
// let nota = 7;
// Promesas 1- pending 2-fulfilled 3-rejected
const eventoFuturo = (nota) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    setTimeout(() => {
      if (nota >= 7) {
        resolve("Chocolates para todos/as");
      } else {
        reject("Uh que bajon");
      }
    }, 3000);
  });
};
//   console.log(eventoFuturo);
const mensaje = document.querySelector("p#mensaje");
// eventoFuturo(7)
// .then((response) => {
//   console.log(response);
//   mensaje.textContent = response;
// }).catch((err)=>{
//     console.log(err);
//     mensaje.textContent = err;
// }).finally(()=>{
//     console.log('PRoceso terminado');
// });
// async y await

async function aprobacionDeCursada(nota) {
  try {
    const response = await eventoFuturo(nota);
    console.log(response);
    mensaje.textContent = response;
  } catch (error) {
    console.log(error);
    mensaje.textContent = error;
  } finally {
    console.log("Proceso terminado");
  }
}
// aprobacionDeCursada(4);
// aprobacionDeCursada(4)
// GET - POST - PUT - PATCH - DELETE

// GET / DELETE(id) no requiren es de un body

// POST - PUT(id) - PATCH(id) requiren un body

// fecth -> PROMISE
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "Post reemplazado",
    body: "Contenido nuevo",
    userId: 1,
  }),
};

// fetch("https://jsonplaceholder.typicode.com/posts", config)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   async await version
// TAREA = parametrizar la funcion
const solicitud = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);
};
solicitud();
