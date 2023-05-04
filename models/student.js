require('dotenv').config()
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')
const secret = process.env.ENCRYPTION_KEY

const StudentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First Name is required']
  },
  lastname: {
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
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ProfileLink'
  },
  writeAccess: {
    type: Boolean,
    default: false
  },
  studentOf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: [true, 'Please add a admin']
  },
  studentAt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: [true, 'Please add a university']
  }
}, { timestamps: true })
// console.log(secret)
StudentSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student
