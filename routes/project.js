const express = require('express');
const router = express.Router();
const { projects } = require('./data.json');

// setup project routes
router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    res.render('project', {project: projects[id]});
});