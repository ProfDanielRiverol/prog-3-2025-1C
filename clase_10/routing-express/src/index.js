// imports
import express from "express";
import morgan from 'morgan'
// settings
const app = express();
app.set("PORT", 5000);
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

// app.use((req, res, next) => {
//   console.log("Middleware ejecutado");
//   console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
//   next();
// });

const verificarAutenticacion = (req, res, next) => {
  const autenticado = false;
  if (!autenticado) {
    return res.status(401).send("NO autorizado");
  }
  next();
};
// app.use(verificarAutenticacion)//no lo debo utilizar
// routes
app.get("/", (req, res) => {
  //   console.log(req.method);
  //   console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);

  //   console.log(res.statusCode);

  res.send("Pagina principal"); //return
});
app.get("/about", (req, res) => {
  //   console.log(req.method);
  //   console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);

  //   console.log(res.statusCode);
  res.send("About");
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  res.send(`USUARIO con ID:${id}`);
});

// validar si esta autorizado
app.get("/profile",verificarAutenticacion, (req, res) => {
  res.status(200).send(`Bienvenido al tu perfil`);
});
app.post("/register", (req, res) => {
  console.log(req.body);
  console.log(req.body.nombre);
  console.log(req.body.apellido);
  res.status(201).send("Registro realizado con exito");
});
app.put("/update-product/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  console.log(req.body.precio);

  res.status(200);
  res.send(`Actualizacion realizada con exito sobre el producto con ID:${id}`);
});
// LUCIO
app.delete("/delete-product/:id", (req, res) => {
  const { id } = req.params; //desestructurar
  res.status(204); //cambiar el status de la respuesta
  res.send(`Eliminacion realizada con exito con id:${id}`);
});
// listen
app.listen(app.get("PORT"), () => {
  console.log(`Server corriendo en http://localhost:${app.get("PORT")}`);
});
