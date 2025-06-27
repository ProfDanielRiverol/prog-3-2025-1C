// controller

export const createUser = async (req, res) => {
  try {
    

    res
      .status(201)
      .json({ message: "Usuario creado con éxito" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};
