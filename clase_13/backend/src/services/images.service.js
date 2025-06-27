// services
import Image from "../models/image.model.js";
import { Op } from "sequelize";

export const getImages = async ({ limit = 10, offset = 0 }) => {
  return await Image.findAndCountAll({
    limit: limit,
    offset: offset,
    order: [["createdAt", "DESC"]],
  }); //select * from users
};

export const create = async (image) => {
  return await Image.create(image);
};

export const findPk = async (id) => {
  return await Image.findByPk(id);
};
export const update = async (user, id) => {
  return Image.update(user, { where: { id: id } });
};
