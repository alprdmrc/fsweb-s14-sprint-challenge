// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

const get = async () => {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");
  let transformedTasks = tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed == 1,
    };
  });
  return transformedTasks;
};

const getById = (task_id) => {
  return db("tasks").where("task_id", task_id);
};

const create = async (task) => {
  const [insertedId] = await db("tasks").insert(task);
  const insertedTask = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description")
    .where("task_id", insertedId)
    .first();
  return {
    ...insertedTask,
    task_completed: insertedTask.task_completed == 1,
  };
};

module.exports = {
  get,
  getById,
  create,
};
