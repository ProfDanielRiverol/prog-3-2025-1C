// controller
import { getUsers, create, findPk, update } from "../services/user.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    res.status(200).json({ message: "Lista de usuarios", payload: users });
  } catch (error) {
    res
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
      .json({ message: "Usuario creado con exito", payload: newUser });
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
      .json({ message: "Usuario encontrado con exito", payload: userFound });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const updateUser= async(req,res)=>{
    // a completar
}
// export default { getAllUsers };
