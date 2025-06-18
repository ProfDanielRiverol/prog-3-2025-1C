import conn from "../config/dbConfig.js";
import User from "./../models/User.js";
//Data Access Object
const UserDao = {
  async getAll() {
    const selectQuery = "SELECT * FROM users";
    console.log(await conn.query(selectQuery));

    const [rows] = await conn.query(selectQuery);
    return rows.map((row) => User.fromObject(row));
  },

  async getById(id) {
    const selectByIdQuery = "SELECT * FROM users WHERE id = ?";
    const [rows] = await conn.execute(selectByIdQuery, [id]);

    if (rows.length === 0) {
      return null;
    }

    return User.fromObject(rows[0]);
  },

  async create(user) {
    const insertQuery = "INSERT INTO users (nombre, email) VALUES (?, ?)";
    const [result] = await conn.execute(insertQuery, [user.nombre, user.email]);
    user.id = result.insertId;
    return User.fromObject(user);
  },

  async update(id, user) {
    const updateQuery = "UPDATE users SET nombre = ?, email = ? WHERE id = ?";
    const [result] = await conn.execute(updateQuery, [
      user.nombre,
      user.email,
      id,
    ]);
    if (result.affectedRows === 0) {
      return null;
    }
    user.id = id;
    return User.fromObject(user);
  },

  async delete(id) {
    const deleteQuery = "DELETE FROM users WHERE id = ?";
    const [result] = await conn.execute(deleteQuery, [id]);
    if (result.affectedRows === 0) {
      return null;
    }
    return { id };
  },
};

export default UserDao;
