import express from "express";
import todoRoutes from "./route/todo.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "To-Do API is running",
  });
});

app.use("/api/todos", todoRoutes);

export default app;