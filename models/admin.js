require('dotenv').config()
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')
const secret = process.env.ENCRYPTION_KEY

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: ['true', 'Please add a username']
  },
  email: {
    type: String,
    required: ['true', "Please add student's email address"]
  },
  password: {
    type: String,
    require: ['true', 'Please add a password']
  },
  firstname: {
    type: String,
    required: ['true', "Please add student's first name"]
  },
  lastname: {
    type: String,
    required: ['true', "Please add student's last name"]
  },
  profiles: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ProfileLink'
  },
  writeAccess: {
    type: Boolean,
    default: true
  },
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Student'
  },
  adminAt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: ['true', 'Please add a university']
  }
}, { timestamps: true })
// console.log(secret)
AdminSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })

const Admin = mongoose.model('Admin', AdminSchema)
module.exports = Admin

