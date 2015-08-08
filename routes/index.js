var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/', entriesController.renderLanding);

//Index
router.get('/entries', entriesController.renderEntriesIndex);

//NEW
router.get('/entries/new', entriesController.renderNewEntries);

// Post new entry route
router.post('/entries', entriesController.postNewEntry);

//SHOW
router.get('/entries/:id', entriesController.renderShowEntry);







module.exports = router;
