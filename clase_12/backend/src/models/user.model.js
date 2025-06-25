// model
import { DataTypes } from "sequelize";
import sequelize from "../config/db-sequelize.js";
// tabla SQL
const User = sequelize.define("User", {
  //columna id
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  // columna
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // columna
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
export default User;
