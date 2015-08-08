// Entry model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var EntrySchema = new mongoose.Schema({
  photo_url: String,
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  date_taken: Date
});

var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
