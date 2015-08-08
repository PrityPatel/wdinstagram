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

//NEW
router.get('/entries/new', function(req, res, next){
  respone.render('new', {title: 'New entry'});
});

// Post new entry route
router.post('/entries', entriesController.postNewEntry);

//SHOW
router.get('/entries/:id', function(req,res, next){
  Entry.findOne({_id: req.params.id}, function(error,entry){
  if (error) return res.send(error);
  res.render('show', {title: entry_url});
  });
});




module.exports = router;
