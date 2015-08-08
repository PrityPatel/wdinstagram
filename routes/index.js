var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/', entriesController.renderLanding);

//Index
router.get('/entries', function(req, res, next){
  Entry.find(function(error, entries){
    if (error) return res.send(error);
    res.render('index', {title: 'entries', });
  });
});


module.exports = router;
