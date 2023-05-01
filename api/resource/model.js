// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const get = () => {
  return db("resources");
};

const getById = (resource_id) => {
  return db("resources").where("resource_id", resource_id).first();
};

const create = (resource) => {
  return db("resources")
    .insert(resource)
    .then((id) => getById(id));
};

module.exports = {
  get,
  getById,
  create,
};
