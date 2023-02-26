const mongoose = require('mongoose');
const {ProfileLinkSchema} = require('./profile_link');
const {UniversitySchema} = require('./university');

const AdminSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     required: ['true', 'Please add a username'],
    // },
    email: {
        type: String,
        required: ['true', "Please add student's email address"],
    },
    password: {
        type: String,
        require: ['true', 'Please add a password'],
    },
    // firstname:{
    //     type: String,
    //     required: ['true', "Please add student's first name"],
    // },
    // lastname: {
    //     type: String,
    //     required: ['true', "Please add student's last name"],
    // },
    // profiles: {
    //     type: [ProfileLinkSchema],
    // },
    // writeAccess: {
    //     type: Boolean,
    //     default: true,
    // },
    // adminAt: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'University',
    // }
})

module.exports = mongoose.model('Admin', AdminSchema);