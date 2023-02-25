const mongoose = require('mongoose');
const { StudentSchema } = require('./student');
const { UniversitySchema } = require('./university');


const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: ['true', 'Please add a title'],
    },
    field: {
        type: String,
        required: ['true', 'Please add a field'],
    },
    summary: {
        type: String,
        required: ['true', 'Please add a summary'],
    },
    members: {
        type: [StudentSchema],
        required: ['true', 'Please add members'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    creatorUniversity: {
        type: [UniversitySchema],
        required: ['true', 'Please add a university'],
    },
    stars: {
        type: Number,
    }
})

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;