// Controller for Entries
var Entry = require('../models/Entry');
// GET landing page
module.exports.renderLanding = function(req, res, next) {
  res.render('landing_page', { title: 'WDInstagram Landing Page' });
};

// GET '/' - renders entries index page
module.exports.renderEntriesIndex = function(req, res, next) {
  Entry.find(function(error, entries){
    if(error) return res.send(error);
    res.render('entries/index', {title: 'WDInstagram Index', entries: entries});
  });
};

// GET 'entries/new' - renders new entry
module.exports.renderNewEntries = function(req, res, next) {
  res.render('entries/new', { title: 'New Entry'});
};
// POST 'entries/new' - adds a new entry and redirects to index
module.exports.postNewEntry = function(req, res, next) {
  var entry = new Entry();
  entry.photo_url = req.body.photo_url;
  entry.author = req.body.author;
  entry.date_taken = req.body.date_taken;

  entry.save();
  res.redirect('/entries');
};

//GET 'entries/id' - renders show one entry
module.exports.renderShowEntry = function(req, res, next) {
  Entry.findOne({_id: req.params.id}, function(error, entry){
    if(error) return res.send(error);
    res.render('entries/show', {title: entry.author, entry: entry});
  });
};


