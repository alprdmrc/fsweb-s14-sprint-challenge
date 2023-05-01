// `/api/tasks` router buraya
const router = require("express").Router();
const taskModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await taskModel.get();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { task_description, task_notes, task_completed, project_id } =
      req.body;
    const insertedTask = await taskModel.create({
      task_description: task_description,
      task_notes: task_notes,
      task_completed: task_completed,
      project_id: project_id,
    });
    res.status(201).json(insertedTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
