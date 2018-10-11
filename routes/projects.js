const express = require('express');
const router = express.Router();
const data = require('../data/data.json').projects;

//Handles request to /projects/id and renders project.pug for specific project based on // id
//If project id does not exist in data.json, Error is created and next function passes err
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const validProject = data[id-1];
  if (validProject) {
    res.locals.projects = data[id-1];
    res.render('project');
  }
  else {
    const err = new Error(`Project route ${req.path} does not exist`);
    err.status = 404;
    next(err);
  }
});

//if err is passed, error.pug is rendered and error message is logged to console
router.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log(`Project route ${req.path} does not exist`)
  res.render('error');
});

module.exports = router;
