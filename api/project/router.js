//  `/api/projects` router buraya
const router = require("express").Router();
const projectModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectModel.get();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.get("/:project_id", async (req, res, next) => {
  try {
    const project = await projectModel.getById(req.params.project_id);
    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { project_name, project_description, project_completed } = req.body;
    const insertedProject = await projectModel.create({
      project_name: project_name,
      project_description: project_description,
      project_completed: project_completed,
    });
    res.status(201).json(insertedProject);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
