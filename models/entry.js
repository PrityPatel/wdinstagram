// Entry model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new mongoose.Schema({
  photo_url: String,
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  date_taken: {
    type: Date,
    default: Date.now
  }
});

var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
