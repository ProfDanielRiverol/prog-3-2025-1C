const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const clearBtn = document.getElementById("clear-tasks");
const pendingSpan = document.getElementById("pending-count");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = createTaskElement(task);
    list.appendChild(li);
  });

  updatePendingCount();
  saveTasks();
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = `task-item ${task.isCompletada ? "completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.isCompletada;
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const span = document.createElement("span");
  span.className = "task";
  span.textContent = task.nombre;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button-delete";
  deleteBtn.textContent = "🥟";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function addTask(nombre) {
  const task = {
    id: crypto.randomUUID(),
    nombre: nombre,
    isCompletada: false,
  };
  tasks.push(task);
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    return task.id === id
      ? { ...task, isCompletada: !task.isCompletada }
      : task;
  });
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function updatePendingCount() {
  const count = tasks.filter((task) => !task.isCompletada).length;
  pendingSpan.textContent = `Tareas pendientes: ${count}`;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Eventos

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const [nombre] = event.target;
  if (!nombre.value.trim()) {
    alert("Ingrese una tarea");
    return;
  }
  addTask(nombre.value.trim());
  nombre.value = "";
});

clearBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});

renderTasks();
