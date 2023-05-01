// `Proje` modeli buraya
const db = require("../../data/dbConfig");

const get = async () => {
  const projects = await db("projects");
  const transformedProjects = projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed == 1,
    };
  });
  return transformedProjects;
};

const getById = (project_id) => {
  return db("projects").where("project_id", project_id);
};

const create = async (project) => {
  const [insertedId] = await db("projects").insert(project);
  const insertedProject = await db("projects")
    .where("project_id", insertedId)
    .first();
  return {
    ...insertedProject,
    project_completed: insertedProject.project_completed == 1,
  };
};

module.exports = {
  get,
  getById,
  create,
};
