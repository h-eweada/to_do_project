import { Router } from "express";
import Todo from "../../model/todo.js";

const router = Router();
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();

    res.json(todos);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to get todos",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid todo id",
      });
    }

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.json(todo);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to get todo",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const todo = await Todo.create({
      title,
      completed: false,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create todo",
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid todo id",
      });
    }

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
      todo.title = title;
    }

    if (completed !== undefined) {
      todo.completed = completed;
    }

    await todo.save();

    res.json(todo);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update todo",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid todo id",
      });
    }

    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    await todo.destroy();

    res.json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
});

export default router;