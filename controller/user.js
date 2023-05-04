////////////////// Require all the packages /////////////////////
const Student = require('../models/student')
const Admin = require('../models/admin')

const bcrypt = require('bcrypt')
// /////////// Exporting all the controller functions ////////////////

// Get request
exports.getAllStudent = (req, res) => {
    console.log(req.params)
  const { id } = req.params
  Admin.findOne({ _id: id }, (err, foundAdmin) => {
    if (err) {
      return res
        .status(400)
        .json({ message: 'Unable to find admin', error: err.message })
    }
    if (foundAdmin) {
      return res.status(200).json({ message: 'Admin found', foundAdmin })
    }
  })
}

//////////////////////// Get adming details /////////////////////////
exports.getAdmin = (req, res) => {
  const { id } = req.params
  Admin.findOne({ _id: id }).
  populate('students').
  populate('adminAt').
  exec((err, admin) => {
    if(err){
      res.status(400).json({message: "Unable to process", error: err.message})
    }else if(admin){
      res.status(200).json({message: "Found admin", admin: admin})
    }
  })
  
}

///////////////// Creating a new student ///////////////////////
exports.postCreateStudent = async (req, res) => {
  const user = req.body
  const takenUsername = await Student.findOne({ username: user.username })
  const takenEmail = await Student.findOne({ email: user.email })
  if (takenUsername || takenEmail) {
    return res.status(400).json({ message: 'Username or Email already taken!' })
  }
  user.password = await bcrypt.hash(user.password, 10)
  const newStudent = new Student(user)
  newStudent.save((err, student) => {
    if (err) {
      return res
        .status(400)
        .json({ message: 'Unable to save student to DB', error: err.message })
    }else{
      Admin.findOne({_id: user.studentOf}, (err, foundAdmin) => {
        if(err){
          res.status(400).json({message: "Unable to process", error: err.message})
        }else if(foundAdmin){
          foundAdmin.students.push(student._id)
          foundAdmin.save((err, savedAdmin) => {
            if(err){
              res.status(400).json({message: "Unable to process", error: err.message})
            }else if(savedAdmin){
              res.status(200).json({message: "Student saved successfully", student})
            }
          })
        }
      })
    }
  })
}

// /////////// Creating a new admin ///////////////////////
exports.postCreateAdmin = async (req, res) => {
  const user = req.body
  const takenUsername = await Admin.findOne({ username: user.username })
  const takenEmail = await Admin.findOne({ email: user.email })

  if (takenUsername || takenEmail) {
    return res.status(400).json({ message: 'Username or Email already taken!' })
  }
  user.password = await bcrypt.hash(user.password, 10)
  const newAdmin = new Admin(user)
  newAdmin.save((err, admin) => {
    if (err) {
      return res.status(400).json({ message: 'Unable to save admin to DB' })
    }
    res.json({ message: 'Admin saved successfully', admin })
  })
}

// Put request
exports.putUpdateStudent = (req, res) => {
  console.log('id: ', req.params.id)
  console.log('body: ', req.body)
  console.log(req.body)
  Student.findByIdAndUpdate(req.params.id, req.body)
    .then(student => {
      console.log('edit: ', { keep })
      return res.json({ message: 'updated successfully', keep })
    })
    .catch(err =>
      res.status(400).json({
        message: 'unable to update to do',
        error: err.message
      })
    )
}

// Delete request
exports.deleteStudent = (req, res) => {
  Student.findByIdAndRemove(req.params.id)
    .then(data => {
      console.log('deleted: ', { data })
      res.json({ message: 'Project deleted successfully', data })
    })
    .catch(err =>
      res.status(400).json({
        message: 'Project could not be deleted',
        error: err.message
      })
    )
}
