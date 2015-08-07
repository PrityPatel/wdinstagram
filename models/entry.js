// Entry model
var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
  url: String,
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  date: Date
});

var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
