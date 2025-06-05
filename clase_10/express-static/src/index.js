import express from "express";
import path from "path";
import url from "url";
// settings
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(express.static(path.join(__dirname, "../public")));//revision

// routes
app.get("/", (req, res) => {
  //   res.status(200).send("pagina principal");
  res.status(200).send("index.html");
});
app.get("/nosotros", (req, res) => {
  //   res.status(200).send("pagina principal");
  res.status(200).send("nosotros.html");
// res.status(200).sendFile(path.join(__dirname, "../public/nosotros.html"));
});

// listen
app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
