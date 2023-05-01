// `/api/resources` router buraya
const router = require("express").Router();
const resourceModel = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resources = await resourceModel.get();
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

router.get("/:resource_id", async (req, res, next) => {
  try {
    const resource = await resourceModel.getById(req.params.resource_id);
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { resource_name, resource_description } = req.body;
    const insertedResource = await resourceModel.create({
      resource_name: resource_name,
      resource_description: resource_description,
    });
    res.status(201).json(insertedResource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
