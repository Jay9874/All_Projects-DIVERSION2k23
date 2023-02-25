const Student = require('../models/student-another')
const Admin = require('../models/admin')


// creating a new user

const jay = new Student({

})


// exports.loginUser = async (req, res) => {
//   const email = req.body.email
//   const password = req.body.password
//   const userType = req.body.userType

//   if (userType === 'admin') {
//     await Student.findOne({ email: email, password: password })
//       .then(foundUser => {
//         res.json({
//           message: 'Login successful',
//           isAuthenticated: true
//         })
//       })
//       .catch(err => {
//         res.status(400).json({ message: 'Unable to login', error: err.message })
//       })
//   } else if (userType === 'student') {
//     await Student.findOne({ email: email, password: password })
//       .then(foundUser => {
//         res.json({
//           message: 'Login successful',
//           isAuthenticated: true
//         })
//       })
//       .catch(err => {
//         res.status(400).json({ message: 'Unable to login', error: err.message })
//       })
//   } else {
//     res.status(400).json({ message: 'Unable to login', error: err.message })
//   }
// }

// Try using this Code Jay
exports.loginUser = async (req, res) => {
    console.log(req.body);
  try {
    const { email, password, userType } = req.body
    if (userType === 'admin') {
      const user = await Admin.findOne({ email })
      if (!user) return res.status(400).json({ message: "User doesn't exists" })
    } else if (userType === 'student') {
      const user = await Student.findOne({ email })
      if (!user) return res.status(400).json({ message: "User doesn't exists" })
    }
    // const user = await Student.findOne({ email })
    // if (!user) return res.status(400).json({ message: "User doesn't exists" })
    const check = await compare(password, user.password)
    if (!check) {
      return res.status(400).json({
        message: 'Password Incorrect',
        isAuthenticated: false
      })
    } else {
      res.json({
        message: 'Login successful',
        isAuthenticated: true
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
