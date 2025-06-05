// Verbos HTTP
// GET => Solicita un recurso. (id)
// POST => Crear un registro. body
// PUT => Actualizar un recurso o crearlo. id body
// PATCH => Actualizar un campo de un recurso.id body
// DELETE => Eliminar un recurso. id

const http = require("http");
const fs = require("fs");
// servidor
const server = http.createServer((request, response) => {
  //   response.end(request.url);
  console.log(request.method);
  if (request.url === "/") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("HOME");
  } else if (request.url === "/nosotros") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("NOSOTROS");
  } else if (request.url === "/api") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(
      JSON.stringify({
        nombre: "Pepe",
        apellido: "Sanchez",
      })
    );
  } else {
    response.writeHead(404, { "Content-type": "text/plain" });
    response.end("PAGE NOT FOUND");
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}`);
});
