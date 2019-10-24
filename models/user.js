var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schema = new Schema({
    email: String,
    firstname: String,
    lastname: String,
    password: String,
})

var User = mongoose.model('User', Schema);

module.exports = User;

User.findOne({ email: 'test@email.com' }).then(function(doc){
    if(!doc) {
        User.create({
            email: 'test@email.com',
            password: '123123',
        });
    }
})
