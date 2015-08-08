// Controller for Entries

// GET landing page
module.exports.renderLanding = function(req, res, next) {
  res.render('landing_page', { title: 'WDInstagram Landing Page' });
};

// GET '/' - renders entries index page
module.exports.renderEntriesIndex = function(req, res, next) {
  res.render('entries/index', { title: 'WDInstagram Index' });
};

// GET 'entries/new' - renders new entry
module.exports.renderNewEntries = function(req, res, next) {
  res.render('entries/new', { title: 'New Entry'});
};
// POST 'entries' - adds a new entry and redirects to index
module.exports.postNewEntry = function(req, res, next) {
  var entry = new Entry();
  entry.url = request.body.url;
  entry.user = request.body.user;
  entry.date = request.body.date;

  entry.save();
  res.redirect('/entries');
};

//GET 'entries/id' - renders show one entry
module.exports.renderShowEntry = function(req, res, next) {
  res.render('entries/:id', {title: "An Entry"});
};


