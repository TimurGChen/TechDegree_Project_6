const express = require('express');
const router = express.Router();
const { projects } = require('./data.json');

// setup main routes
router.get('/', (req, res, next) => {
    res.render('home', { projects });
});

router.get('/about', (req, res, next) => {
    res.render('about');
})

module.exports = router;