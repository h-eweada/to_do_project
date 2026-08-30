import express from "express";
import sequelize from "./config/db.js";
import todosRouter from "./route/todo.route.js";

const app = express();

app.use(express.json());

app.use("/todos", todosRouter);

const PORT = 3000;

async function startServer() {
  try {
    await sequelize.authenticate();

    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

startServer();