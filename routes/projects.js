const express = require('express');
const router = express.Router();
const data = require('../data/data.json').projects;

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.locals.projects = data[id-1];
  res.render('project');
});

module.exports = router;
