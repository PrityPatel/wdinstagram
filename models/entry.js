// Entry model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  photo_url: String,
  author: String,
  date_taken: {
    type: Date,
    default: Date.now
  }
});

var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
