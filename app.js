const express = require('express');
const app = express();
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

//Sets view engine to pug
app.set('view engine', 'pug');

//Sets up static route
app.use('/static', express.static('public'));

//Route set-ups
app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

//If address does not exist, creates Error and passes err to next middleware
app.use((req, res, next) => {
  const err = new Error(`Invalid address request: ${req.path}`);
  err.status = 404;
  next(err);
});

//If err is passed, renders error.pug template and logs error message to the console
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log(`Invalid address request: ${req.path}`)
  res.render('error');
});

//Server setup to listen on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});
