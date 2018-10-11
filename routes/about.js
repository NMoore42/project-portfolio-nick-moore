const express = require('express');
const router = express.Router();

//Handles requests for /about and renders about.pug
router.get('/', (req, res) => {
  res.locals.skills = 'Skills';
  res.render('about');
});

module.exports = router;
