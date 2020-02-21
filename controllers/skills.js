var SkillDb = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function index(req, res, next) {
  res.render("skills/index", {
    skills: SkillDb.getAll()
  });
}

function show(req, res) {
  res.render("skills/show", {
		skill: SkillDb.getOne(req.params.id),
		pageId: req.params.id
  });
}

function newSkill(req, res) {
  res.render("skills/new", {});
}

function create(req, res) {
  req.body.learned = false;
  SkillDb.create(req.body);
  res.redirect("/skills/");
}

function deleteSkill(req, res) {
  SkillDb.deleteOne(req.params.id);
  res.redirect("/skills/");
}
