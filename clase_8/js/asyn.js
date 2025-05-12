const boton = document.getElementsByTagName("button")[0];
boton.addEventListener("click", () => peticion());

const content = document.getElementById("contenido");

// Uso del objeto XMLHttpRequest
function peticion() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  xhttp.onreadystatechange = function () {
    content.textContent = xhttp.readyState;

    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const data = JSON.parse(xhttp.responseText);
      console.log(data);

      content.innerHTML = `
      <br>
      <h3>${data?.title}</h3>
      <br>
      <h4>Id del Post: ${data?.id}</h4>
      <h4>Id del usuario: ${data?.userId}</h4>
      <br>
      <p><strong>Post:</strong> ${data?.body}</p>`;
    }
    content.innerHTML += `<h4>Estado de la petición: ${xhttp.status}</h4>`;
  };
  xhttp.send();
}

// Uso de la API Fetch

// Petición GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Petición POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo post",
    body: "Contenido del post",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("POST:", data));

// Petición PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "Post reemplazado",
    body: "Contenido nuevo",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("PUT:", data));

// Petición PATCH
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Título actualizado",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("PATCH:", data));

// Petición DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then((res) => {
  if (res.ok) {
    console.log("DELETE: recurso eliminado");
  } else {
    console.error("Error al eliminar");
  }
});
