////////////////// Require all the packages /////////////////////
const Project = require('../models/project')
const cloudinary = require('../config/cloudinary')

// /////////// Exporting all the controller functions ////////////////

// Get request
exports.getAllProject = async (req, res) => {
  Project.find()
    .then(project => {
      res.json(project)
    })
    .catch(err =>
      res.status(400).json({ message: 'No Project found!', error: err.message })
    )
}

// Post request
exports.postCreateProject = async (req, res) => {
  console.log('body: ', req.body)
  const { title, field, summary, members, image, university } =
    req.body

  try {
    // const result = await cloudinary.uploader.upload(image, {
    //   folder: 'projects',
    //   width: 400,
    //   crop: 'scale'
    // })
    const project = await Project.create({
      title,
      field,
      summary,
      members,
      image,
      // image: {
      //   public_id: result.public_id,
      //   url: result.secure_url
      // },
      university
    })
    res.status(200).json({
      success: 'true',
      message: 'Project added!'
    })
  } catch (err) {
    console.log('Unable to process, error', err.message)
  }
}
// Put request
exports.putUpdateProject = (req, res) => {
  console.log('id: ', req.params.id)
  console.log('body: ', req.body)
  console.log(req.body)
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(project => {
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
exports.deleteProject = (req, res) => {
  Project.findByIdAndRemove(req.params.id)
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
