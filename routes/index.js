const express = require('express');
const router = express.Router();
const data = require('../data/data.json').projects;

//Handles requests for / and renders index.pug
router.get('/', (req, res) => {
  res.locals.projects = data;
  res.render('index');
});


module.exports = router;
