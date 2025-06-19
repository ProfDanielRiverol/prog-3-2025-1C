import User from "../models/User.js";
import UserServices from "../services/user.service.js";

const UserController = {
  async getAll(req, res) {
    try {
      const users = await UserServices.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res
        .status(500)
        .send("Error en la base de datos. " + error.message);
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).send("ID es requerido");
      }
      const user = await UserServices.getUserById(id);
      if (!user) {
        return res.status(404).send("Usuario no encontrado/a");
      }
      return res.json(user);
    } catch (error) {
      return res
        .status(500)
        .send("Error en la base de datos. " + error.message);
    }
  },

  async create(req, res) {
    try {
      let user = req.body;
      if (!user || !user.nombre || !user.email) {
        return res.status(400).send("Nombre y email son requeridos");
      }
      user = User.fromObject(user);
      const newUser = await UserServices.createUser(user);
      return res.status(201).json(newUser);
    } catch (error) {
      return res
        .status(500)
        .send("Error en la base de datos. " + error.message);
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      let user = req.body;
      if (!id) {
        return res.status(400).send("ID es requerido");
      }
      if (!user || !user.nombre || !user.email) {
        return res.status(400).send("Nombre y email son requeridos");
      }
      user = User.fromObject(user);
      const updatedUser = await UserServices.updateUser(id, user);
      if (!updatedUser) {
        return res.status(404).send("Usuario no encontrado/a");
      }
      return res.json(updatedUser);
    } catch (error) {
      return res
        .status(500)
        .send("Error en la base de datos. " + error.message);
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).send("ID es requerido");
      }
      const deletedUser = await UserServices.deleteUser(id);
      if (!deletedUser) {
        return res.status(404).send("Usuario no encontrado/a");
      }
      return res.json({ message: "Usuario eliminado/a" });
    } catch (error) {
      return res
        .status(500)
        .send("Error en la base de datos. " + error.message);
    }
  },
};

export default UserController;
