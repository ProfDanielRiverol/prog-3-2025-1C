import UserDao from "../dao/User.dao.js";

const userService = {
  async getAllUsers() {
    return UserDao.getAll();
  },

  async getUserById(id) {
    return UserDao.getById(id);
  },

  async createUser(user) {
    return UserDao.create(user);
  },

  async updateUser(id, user) {
    return UserDao.update(id, user);
  },

  async deleteUser(id) {
    return UserDao.delete(id);
  },
};

export default userService;
