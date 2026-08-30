import { DataTypes, Model } from "sequelize";
import sequelize from "../src/config/db.js";

class Todo extends Model {
  declare id: number;
  declare title: string;
  declare completed: boolean;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "todos",
    timestamps: false,
  }
);

export default Todo;