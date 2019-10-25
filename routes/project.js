const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// setup project routes
router.get('/', (req, res, next) => {
    res.redirect(`/project/${Math.floor(Math.random() * projects.length)}`);
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    let index = 0;
    if (isNaN(id)) {
        return res.redirect(`/project/${Math.floor(Math.random() * projects.length)}`);
    } else {
        index = Math.floor(id);
        if (index < 0) {
            index = 0;
        } else if (index > (projects.length - 1)) {
            index = projects.length - 1;
        }
    }
    
    res.render('project', {project: projects[index]});
});

module.exports = router;