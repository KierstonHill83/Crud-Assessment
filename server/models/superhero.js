var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Superhero = new Schema(
  {
    name: String,
    power: String,
    enemy: String
  }
);

mongoose.connect('mongodb://localhost/node-superheros');

module.exports = mongoose.model('superheros', Superhero);
