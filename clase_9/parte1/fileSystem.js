const fs = require("fs");
let mensaje =
  "Dentro de cada hombre existe una lucha entre el bien y el mal que no se define. Homero Simpson";
fs.writeFileSync("./mensaje.txt", mensaje, () => {
  try {
    console.log("Exito");
  } catch (error) {
    console.log(error);
  }
});
let respuesta = fs.readFileSync("./mensaje.txt", "utf-8");
console.log(respuesta);
