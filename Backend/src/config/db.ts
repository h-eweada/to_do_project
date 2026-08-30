import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "mydb",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "123456789",
  {
    host: process.env.DB_HOST || "192.168.1.119",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;