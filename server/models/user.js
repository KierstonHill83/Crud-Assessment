var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//passportLocalMongoose takes away the reson to hash
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String  
  });

User.plugin(passportLocalMongoose);

// process.env.DB_HOST = "mongodb://heroku_hvxk1pzn:1q5nft62jsikd4qc1stdlg4sc9@ds041571.mongolab.com:41571/heroku_hvxk1pzn";
mongoose.connect("mongodb://heroku_hvxk1pzn:1q5nft62jsikd4qc1stdlg4sc9@ds041571.mongolab.com:41571/heroku_hvxk1pzn" || "mongodb://localhost/node-superhero");

module.exports = mongoose.model('users', User);
