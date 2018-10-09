const express = require('express');
const app = express();
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});
