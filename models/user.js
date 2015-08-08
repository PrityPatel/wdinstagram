var mongoose = require("mongoose");

var Entry = mongoose.model("Entry");

var UserSchema = new mongoose.Schema({
  author: String,
  entries: [Entry.schema]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
