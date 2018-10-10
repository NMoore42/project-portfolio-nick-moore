const express = require('express');
const app = express();
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

app.use((req, res, next) => {
  const err = new Error(`Invalid address request: ${req.path}`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log(`Invalid address request: ${req.path}`)
  res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});
