import conn from "../config/dbConfig.js";
//Data Access Object
const UserDao = {
  async getAll() {
    const selectQuery = "SELECT * FROM users";
    console.log(await conn.query(selectQuery));

    const [rows] = await conn.query(selectQuery);
    return rows;
  },

  async getById(id) {
    const selectByIdQuery = "SELECT * FROM users WHERE id = ?";
    const [rows] = await conn.execute(selectByIdQuery, [id]);

    if (rows.length === 0) {
      return null;
    }

    return rows[0];
  },

  async create(user) {},

  async update(id, user) {},

  async delete(id) {},
};

export default UserDao;
