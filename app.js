const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// setup view engine
app.set('view engine', 'pug');

// serve static assets
app.use('/static', express.static('public'));

// import routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/project', projectRoutes);

// error handlers
const { handle404, handleGeneral } = require('./errorHandlers');
app.use(handle404);
app.use(handleGeneral);

// start the server
app.listen(port, () => {
    console.log('Running on local port 3000');
})