var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schema = new Schema({
    name: String,
    path: String,
})

var Theme = mongoose.model('Theme', Schema);

module.exports = Theme;
