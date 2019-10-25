var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schema = new Schema({
    personal: {
        email: String,
        firstname: String,
        lastname: String,
        linkedin: String,
        phone: String,
        address: String
    },
    education: [{
        institute: String,
        course: String,
        grade: String,
        year: String
    }],
    experience: [{
        company: String,
        position: String,
        startDate: String,
        endDate: String
    }],
    skills: [String],
    themeId: { type: Schema.Types.ObjectId, ref: 'Theme' },

    userId: { type: Schema.Types.ObjectId, ref: 'User' },

})

var Resume = mongoose.model('Resume', Schema);

module.exports = Resume;
