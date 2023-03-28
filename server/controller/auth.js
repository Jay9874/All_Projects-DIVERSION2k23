const Student = require('../models/student')
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// /////////// Exporting all the controller functions ////////////////

// creating a new user

exports.loginUser = async (req, res) => {
  const { email, password, userType } = req.body
  if (userType === 'admin') {
    Admin.findOne({ email: email }, (err, foundUser) => {
      if (err) {
        console.log(err)
        res.status(400).json({ message: 'Unable to login', error: err.message })
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password).then(isCorrect => {
            const payload = {
              id: foundUser._id,
              email: foundUser.email,
              userType: 'admin',
              firstname: foundUser.firstname
            }
            jwt.sign(
              payload,
              process.env.JWT_KEY,
              { expiresIn: 3600 },
              (err, token) => {
                if (err)
                  return res.json({
                    message: 'Unable to login',
                    error: err.message
                  })
                return res.json({
                  message: 'Admin login successful',
                  token: 'Bearer ' + token,
                  userType: 'admin',
                  userId: foundUser._id,
                  userFirstName: foundUser.firstname,
                  userDetail: foundUser,
                  isLoggedIn: true
                })
              }
            )
          })
        } else {
          res.status(400).json({ message: 'Unable to login' })
        }
      }
    })
  } else if (userType === 'student') {
    Student.findOne({ email: email }, (err, foundUser) => {
      if (err) {
        console.log(err)
        res.status(400).json({ message: 'Unable to login', error: err.message })
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password).then(isCorrect => {
            const payload = {
              id: foundUser._id,
              email: foundUser.email,
              userType: 'student',
              firstname: foundUser.firstname
            }
            jwt.sign(
              payload,
              process.env.JWT_KEY,
              { expiresIn: 3600 },
              (err, token) => {
                if (err)
                  return res.json({
                    message: 'Unable to login',
                    error: err.message
                  })
                return res.json({
                  message: 'Student login successful',
                  token: 'Bearer ' + token,
                  userType: 'student',
                  userId: foundUser._id,
                  userFirstName: foundUser.firstname,
                  userDetail: foundUser,
                  isLoggedIn: true
                })
              }
            )
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

exports.verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token']?.split(' ')[1]
  if (!token) {
    return res.status(403).json({
      isLoggedIn: false,
      message: 'No token provided'

    })
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        isLoggedIn: false,
        message: 'Unauthorized'
      })
    }
    req.userId = decoded.id
    req.firstname = decoded.firstname
    req.userType = decoded.userType
    next()
  })
}
