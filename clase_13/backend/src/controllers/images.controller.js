// controller
import { getImages, findPk, create } from "../services/images.service.js";

export const getAll = async (req, res) => {
  try {
    const images = await getImages({ limit: 10, offset: 0 });
    res.status(200).json({ payload: images });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "falta el id de la imagen" });
    }
    const image = await findPk(id);

    if (!image) {
      return res.status(404).json({ message: "imagen no encontrado" });
    }

    res.status(200).json({ payload: image });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};

export const upload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "falta la imagen" });
    }

    const imageUpload = await create({
      name: req.file.originalname,
      url: req.file.filename,
    });

    res.status(201).json({ message: "imagen creada", payload: imageUpload });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
};
