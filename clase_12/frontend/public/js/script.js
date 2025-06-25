const API_URL = "http://localhost:3001/api/users/";

const list = document.getElementById("alumnos");

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    data?.payload.rows.forEach((user) => {
      addRow(user.firstName, user.lastName, user.email, user.id);
    });
  })
  .catch((e) => alert("Error " + e));

const addRow = (nombre, apellido, email = "No email", id = "No ID") => {
  const newRow = document.createElement("li");
  newRow.classList.add("list-group-item");
  newRow.innerHTML = `
        <div class="row py-2">
           <div class="card col-12">
                <div class="card-body">
                     <h5 class="card-title">${nombre} ${apellido}</h5>
                     <p class="card-text text-primary">ID: ${id}</p>
                    <p class="card-text">Email: ${email}</p>
                </div>
           </div>
        </div>
    `;

  list.appendChild(newRow);
};

const searchInput = document.getElementById("searchInput");

document
  .getElementById("searchButton")
  .addEventListener("click", async (evn) => {
    evn.preventDefault();
    const searchValue = searchInput.value.toLowerCase();

    try {
      const resp = await fetch(API_URL + `search?firstName=${searchValue}`);
      const data = await resp.json();

      list.innerHTML = "";
      data.payload.rows.forEach((user) => {
        addRow(user.firstName, user.lastName, user.email, user.id);
      });

    } catch (error) {
      console.log(error);
    }
  });
