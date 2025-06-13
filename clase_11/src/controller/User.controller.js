import UserDao from "../dao/User.dao.js";

const UserController = {
  async getAll(req, res) {
    try {
      const users = await UserDao.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).send("Error en la base de datos.");
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).send("ID es requerido");
      }
      const user = await UserDao.getById(id);
      if (!user) {
        return res.status(404).send("Usuario no encontrado/a");
      }
      res.json(user);
    } catch (error) {
      res.status(500).send("Error en la base de datos.");
    }
  },

  async create(req, res) {
    try {
    } catch (error) {}
  },

  async update(req, res) {
    try {
    } catch (error) {}
  },

  async delete(req, res) {
    try {
    } catch (error) {}
  },
};

export default UserController;
