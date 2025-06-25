const API_URL = "http://localhost:3001/api/users/";

document
  .getElementById("createForm")
  .addEventListener("submit", async (evn) => {
    evn.preventDefault();

    // const form = evn.target;
    // console.log(form)
    // const data = new FormData(form);
    // console.log(data);

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    const data = { firstName, lastName, email };

    console.log(data)
    
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await res.json();

      alert("Alumno Creado");
    } catch (error) {
      console.log(error);
      alert("Error al crear un Alumno");
    }
  });
