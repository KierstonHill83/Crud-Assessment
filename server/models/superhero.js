var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Superhero = new Schema(
  {
    name: String,
    power: String,
    enemy: String
  }
);

// process.env.DB_HOST = "mongodb://heroku_hvxk1pzn:1q5nft62jsikd4qc1stdlg4sc9@ds041571.mongolab.com:41571/heroku_hvxk1pzn";
mongoose.connect("mongodb://heroku_hvxk1pzn:1q5nft62jsikd4qc1stdlg4sc9@ds041571.mongolab.com:41571/heroku_hvxk1pzn" || "mongodb://localhost/node-superhero");

module.exports = mongoose.model('superheros', Superhero);
