// controller
import {
  getUsers,
  create,
  findPk,
  getUsersWithQuery,
  update,
} from "../services/user.service.js";

export const getAllUsers = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit = +limit;
    offset = +offset;
    const users = await getUsers({ limit, offset });

    res.status(200).json({
      message: "Lista de usuarios",
      payload: { limit, offset, ...users },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const getAllUsersWithQuery = async (req, res) => {
  try {
    // http://dominio.com/api/users/?lastName="Luzuri"&firstName="Ag"
    const { firstName, lastName } = req.query;
    const users = await getUsersWithQuery({ firstName, lastName }); // [ {} , {}]
    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron los usuarios" });
    }

    return res
      .status(200)
      .json({ message: "Lista de usuarios", payload: users });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email)
      return res.status(400).json({ message: "Todos los campos requeridos" });
    const newUser = await create({ firstName, lastName, email });

    res
      .status(201)
      .json({ message: "Usuario creado con éxito", payload: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const findUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const userFound = await findPk(id);
    if (!userFound)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res
      .status(200)
      .json({ message: "Usuario encontrado con éxito", payload: userFound });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email)
      return res.status(400).json({ message: "Todos los campos requeridos" });

    const userUpdated = await update({ firstName, lastName, email }, id);
    if (!userUpdated) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res
      .status(200)
      .json({ message: "Usuario actualizado con éxito", payload: userUpdated });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};
