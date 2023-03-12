const mongoose = require('mongoose')
const { ProfileLinkSchema } = require('./profile_link')
const { UniversitySchema } = require('./university')
const { University } = require('./university')

const StudentSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First Name is required']
  },
  last_name: {
    type: String,
    required: [true, 'Last Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  profiles: {
    type: [ProfileLinkSchema]
  },
  writeAccess: {
    type: Boolean,
    default: false
  },
  studentOf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
  studentAt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University'
  }
})

const Student = mongoose.model('Student', StudentSchema);
const Jay = new Student({
  first_name: "Jay Prakash",
  last_name: "Sharma",
  username: "jay9874",
  email: "jayprakashsharma225@gmail.com",
  password: "jay9874",
})
// Jay.save((err)=> {
//   if(err) return handleError(err);
//   console.log("created a new student.");
// })



module.exports = mongoose.model('Student', StudentSchema)
