var express = require('express');
var router = express.Router();
var skillDb = require('../models/skill')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    skills: skillDb.getAll()
  });
});

module.exports = router;
