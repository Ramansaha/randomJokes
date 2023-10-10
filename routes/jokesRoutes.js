const express = require('express');
const router = express.Router();

const { getRandomJoke }= require('../controllers/jokesController');

// Get a random Chuck Norris joke
router.get('/random-joke', getRandomJoke);

module.exports = router;