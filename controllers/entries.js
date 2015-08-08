// Controller for Entries

// GET '/' - renders entries index page
module.exports.renderEntriesIndex = function(req, res, next) {
  res.render('entries/index', { title: 'WDInstagram' });
};

module.exports.renderLanding = function(req, res, next) {
  res.render('landing_page', { title: 'WDInstagram' });
};

// GET 'entries/new' - renders new entry page
module.exports.renderNewEntries = function(req, res, next) {
  res.render('entries/new', { title: 'New Entry'});
};
