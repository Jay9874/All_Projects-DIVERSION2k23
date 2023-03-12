const mongoose = require('mongoose');

const ProfileLinkSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: ['true', 'Please add a profile'],
    },
    url: {
        type: String,
        required: ['true', 'Please add a url'],
    }
})












const ProfileLink = mongoose.model('ProfileLink', ProfileLinkSchema);
module.exports = ProfileLink;
module.exports = ProfileLinkSchema;
