const skills = [
  { skill: "JavaScript", learned: true },
  { skill: "HTML/CSS", learned: true },
  { skill: "Node.js", learned: false },
  { skill: "Express.js", learned: false }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill) {
  skills.push(skill);
}

function deleteOne(id) {
  skills.splice(id, 1);
}
