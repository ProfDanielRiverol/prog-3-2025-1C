import express from "express";
import mysql from "mysql2";

const app = express();
const PORT = 3001;

app.use(express.json());

const dbConexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

dbConexion.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Conexion creada");
});

app.get("/create", (req, res) => {
  const createQuery = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE 
)
`;

  dbConexion.query(createQuery, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.get("/users", (req, res) => {
  const selectQuery = "SELECT * FROM users";

  dbConexion.query(selectQuery, (err, result) => {
    if (err) {
      res.status(500);
    }

    
    res.json(result);
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const selectByIdQuery = "SELECT * FROM users WHERE id = ?";

  dbConexion.execute(selectByIdQuery, [id], (err, result) => {
    if (err) {
      res.status(500).send("Error en la base de datos.");
    }

    if (result.length === 0) {
      res.status(404).send("Usuario no encontrado/a");
    }

    res.json(result[0]);
  });
});

app.post("/users", (req, res) => {
  const { nombre, email } = req.body;

  const insertQuery = `INSERT INTO users(nombre, email) VALUES ( ? , ?)`;

  dbConexion.execute(insertQuery, [nombre, email], (err, result) => {
    if (err) res.send(err);

    res.json(result);
  });
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, email } = req.body;

  const updateQuery = "UPDATE users SET nombre= ?, email= ? WHERE id = ?";

  dbConexion.execute(updateQuery, [nombre, email, id], (err, result) => {
    if (err) {
      res.status(500).send("Error de la base de datos.");
    }

    if (result.affectedRows === 0) {
      res.status(404).send("Usuario no encontrado/a");
    }

    res.send("Usuario actualizado.");
  });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const deleteQuery = "DELETE FROM users WHERE id = ?";

  dbConexion.execute(deleteQuery, [id], (err, result) => {
   
    if (err) {
      res.status(500).send("Error en la base de datos.");
    }

    if (result.affectedRows === 0) {
      res.status(404).send("No existe ese usuario");
    }

    res.status(204).send();
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
