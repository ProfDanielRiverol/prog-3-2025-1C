const list = document.querySelector(".libros-contenedor");

const libros = [
  {
    titulo: "JavaScript",
    descripcion:
      "Uso de Eventos: Implementar eventos como clics, desplazamientos y teclas presionadas para interactuar con el usuario y responder a sus acciones.",
    isOpen: false,
  },
  {
    titulo: "Java",
    descripcion:
      "Uso de Funciones: Desarrollar funciones que realicen tareas específicas, como filtrar datos, mostrar/ocultar información, y actualizar la interfaz de usuario.",
    isOpen: false,
  },
  {
    titulo: "Python",
    descripcion:
      "Trabajo con Arrays y Objetos: Utilizar arrays para manejar listas de datos (por ejemplo, libros o productos), y objetos para almacenar información relacionada (como los",
    isOpen: false,
  },
  {
    titulo: "1984",
    descripcion:
      "Una novela distópica escrita por George Orwell que explora temas como la vigilancia, la opresión y la manipulación de la verdad en una sociedad totalitaria.",
    isOpen: false,
  },
];

function rederLibros() {
  const fragment = document.createDocumentFragment();
  libros.forEach((libros) => {
    fragment.appendChild(crearLibro(libros));
  });
  list.replaceChildren(fragment);
}

function crearLibro(libro) {
  const libroDiv = document.createElement("div");
  libroDiv.classList.add("libro-card");

  const titulo = document.createElement("h3");
  titulo.textContent = libro?.titulo;

  const boton = document.createElement("button");
  boton.textContent = libro.isOpen ? "Ocultar detalle" : "Ver detalles";
  boton.addEventListener("click", () => {
    libro.isOpen = !libro.isOpen;
    rederLibros();
  });

  libroDiv.appendChild(titulo);
  libroDiv.appendChild(boton);
  if (libro?.isOpen) {
    const descripcion = document.createElement("p");
    descripcion.textContent = libro?.descripcion;
    descripcion.classList.add("descripcion");

    libroDiv.appendChild(descripcion);
  }

  return libroDiv;
}

rederLibros();
