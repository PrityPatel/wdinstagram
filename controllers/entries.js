// Controller for Entries

// GET '/' - renders entries index page
module.exports.renderEntriesIndex = function(req, res, next) {
  res.render('entries/index', { title: 'WDInstagram Index' });
};

// GET landing page
module.exports.renderLanding = function(req, res, next) {
  res.render('landing_page', { title: 'WDInstagram Landing Page' });
};

// GET 'entries/new' - renders new entry
module.exports.renderNewEntries = function(req, res, next) {
  res.render('entries/new', { title: 'New Entry'});
};

//GET 'entries/id' - renders show one entry
module.exports.renderShowEntry = function(req, res, next) {
  res.render('entries/:id', {title: "An Entry"});
};
