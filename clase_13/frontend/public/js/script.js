const API_URL = "http://localhost:3001/";

document
  .getElementById("uploadForm")
  .addEventListener("submit", async (evn) => {
    evn.preventDefault();

    const file = fileInput.files[0];
    if (!file) return alert("seleccione un archivo.");

    const data = new FormData();
    data.append("image", file);

    console.log(data);
    try {
      const resp = await fetch(API_URL + "api/images", {
        method: "POST",
        body: data,
      });

      const dataRes = await resp.json();

      if (resp.ok) {
        progressFill.style.backgroundColor = "#22c55e";
        progressFill.style.width = "100%";

        const image = await fetch(API_URL + `images/${dataRes.payload.url}`);
        const blob = await image.blob();
        const objectURL = URL.createObjectURL(blob);
        const imagen = `<div class="image-preview-box">
                          <img src="${objectURL}" />
                        </div>`;
        
        document.getElementById("imageResult").innerHTML = imagen;
      }
    } catch (error) {
      //cssom
      progressFill.style.backgroundColor = "#ef4444";
      progressFill.style.width = "100%";
      console.log(error.message);
    }
  });
