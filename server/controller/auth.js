const Student = require('../models/student')
const Admin = require('../models/admin')

// creating a new user


exports.loginUser = async (req, res) => {
    console.log(req.body);
  const { email, password, userType } = req.body;

  if (userType === 'admin') {
    await Admin.findOne({ email: email})
      .then(foundUser => {
        console.log(foundUser);
        res.json({
          user: 'admin',  
          message: 'Admin Login successful',
          isAuthenticated: true
        })
      })
      .catch(err => {
        res.status(400).json({ message: 'Unable to login', error: err.message })
      })
  } else if (userType === 'student') {
    await Student.findOne({ email: email})
      .then(foundUser => {
        console.log(foundUser)
        res.json({
          user: 'student',
          message: 'Student Login successful',
          isAuthenticated: true
        })
      })
      .catch(err => {
        res.status(400).json({ message: 'Unable to login', error: err.message })
      })
  } else {
    res.status(400).json({ message: 'Unable to login', error: err.message })
  }
}
