import express from "express";

const server = express();
// settigns
server.set("PORT", 5000);

// routes
server.get("/", (req, res) => {
  res.send("Hola mundo");
});
server.get("/nosotros", (req, res) => {
  res.send("Nosotros");
});

// listen
server.listen(server.get("PORT"), () => {
  console.log(`Server corriendo en el puerto: ${server.get("PORT")}`);
});
