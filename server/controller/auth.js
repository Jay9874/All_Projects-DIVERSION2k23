const Student = require('../models/student')
const Admin = require('../models/admin')

// creating a new user

exports.loginUser = async (req, res) => {
  console.log("hello", req.body)
  const { email, password, userType } = req.body

  if (userType === 'admin') {
    Admin.findOne({ email: email, password: password }, (err, foundUser) => {
      if (err) {
        console.log(err)
        res.status(400).json({ message: 'Unable to login', error: err.message })
      } else {
        if (foundUser) {
          console.log(foundUser)
          res.json({
            user: 'admin',
            message: 'Admin login successful',
            userId: foundUser._id,
            userDetail: foundUser
          })
        } else {
          res.status(400).json({ message: 'Unable to login' })
        }
      }
    })
  } else if (userType === 'student') {
    Student.findOne({ email: email, password: password }, (err, foundUser) => {
      if (err) {
        console.log(err)
        res.status(400).json({ message: 'Unable to login', error: err.message })
      } else {
        if (foundUser) {
          console.log(foundUser)
          res.json({
            user: 'student',
            message: 'Student login successful',
            userId: foundUser._id,
            userDetail: foundUser
          })
        } else {
          res.status(400).json({ message: 'Unable to login' })
        }
      }
    })
  } else {
    res.status(400).json({ message: 'Unable to login' })
  }
}
