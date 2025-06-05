// Verbos HTTP
// GET => Solicita un recurso. (id)
// POST => Crear un registro. body
// PUT => Actualizar un recurso o crearlo. id body
// PATCH => Actualizar un campo de un recurso.id body
// DELETE => Eliminar un recurso. id

const http = require("http");
const fs= require('fs')
// servidor
const server = http.createServer((request, response) => {
  const user = {
    nombre: "Julian",
    apellido: "Lopez",
  };
const html= fs.readFileSync('./index.html','utf-8')
  // cabecera
  //   response.writeHead(200, { "Content-type": "text/plain" });
//   response.writeHead(200, { "Content-type": "application/json" });
  response.writeHead(200, { "Content-type": "text/html" });
  // respuesta del servidor
  //   response.end("Hola tarola");//texto plano
//   response.end(JSON.stringify(user));
response.end(html)
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}`);
});
