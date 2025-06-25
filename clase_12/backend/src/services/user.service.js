// services
import User from "../models/user.model.js";
import { Op } from "sequelize";

export const getUsers = async () => {
  return await User.findAll(); //select * from users
};

export const getUsersWithQuery = async (query) => {
  console.log(query)

  return await User.findAll({
    where: {
      [Op.and]: [
        query.firstName
          ? {
              firstName: { [Op.like]: `${query.firstName}%` },
            }
          : null,
        query.lastName
          ? {
              lastName: { [Op.like]: `${query.lastName}%` },
            }
          : null,
      ].filter(Boolean),
    },
  });
};

export const create = async (user) => {
  return await User.create(user);
};

export const findPk = async (id) => {
  return await User.findByPk(id);
};
export const update = async (user, id) => {
  return User.update(user, { where: { id: id } });
};
