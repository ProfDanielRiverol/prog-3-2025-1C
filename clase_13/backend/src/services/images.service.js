// services
import Image from "../models/image.model.js";
import { Op } from "sequelize";

export const getUsers = async ({ limit = 10, offset = 0 }) => {
  return await Image.findAndCountAll({
    limit: limit,
    offset: offset,
    order: [["createdAt", "DESC"]],
  }); //select * from users
};

export const create = async (user) => {
  return await Image.create(user);
};

export const findPk = async (id) => {
  return await Image.findByPk(id);
};
export const update = async (user, id) => {
  return Image.update(user, { where: { id: id } });
};
