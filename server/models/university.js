const mongoose = require('mongoose')

const UniversitySchema = new mongoose.Schema({
  uniname: {
    type: String,
    required: ['true', 'Please add a university name']
  },
  unicity: {
    type: String,
    required: ['true', 'Please add a university city']
  },
  unistate: {
    type: String,
    required: ['true', 'Please add a university state']
  }
})

const University = mongoose.model('University', UniversitySchema)

const IITM = new University({
  uniname: 'Indian Institute of Technology Madras',
  unicity: 'Chennai',
  unistate: 'Tamil Nadu'
})
// IITM.save((err) => {
//     if(err) return handleError(err);
//     console.log("created a new university.");
// })
module.exports = University
module.exports = UniversitySchema
