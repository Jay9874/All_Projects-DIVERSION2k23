const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
    uniname: {
        type: String,
        required: ['true', 'Please add a university name'],
    },
    unicity: {
        type: String,
        required: ['true', 'Please add a university city'],
    },
    unistate: {
        type: String,
        required: ['true', 'Please add a university state'],
    },
})

const University = mongoose.model('University', UniversitySchema);
module.exports = University;
module.exports = UniversitySchema;