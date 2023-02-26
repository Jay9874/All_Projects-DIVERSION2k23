const mongoose = require('mongoose')
const { ProfileLinkSchema } = require('./profile_link')
const { UniversitySchema } = require('./university')
const { University } = require('./university')

const StudentSchema = mongoose.Schema({
//   first_name: {
//     type: String,
//     required: [true, 'First Name is required']
//   },
//   last_name: {
//     type: String,
//     required: [true, 'Last Name is required']
//   },
//   username: {
//     type: String,
//     required: [true, 'Username is required']
//   },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
//   profiles: {
//     type: [ProfileLinkSchema]
//   },
//   writeAccess: {
//     type: Boolean,
//     default: false
//   },
//   studentAt: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'University'
//   }
})

module.exports = mongoose.model('User', StudentSchema)
