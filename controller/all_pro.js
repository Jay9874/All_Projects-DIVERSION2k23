////////////////// Require all the packages /////////////////////
const Project = require('../models/project')
const cloudinary = require('../config/cloudinary')

// /////////// Exporting all the controller functions ////////////////



////////////////////// Get Projects by field///////////////////////
exports.getAllProject = async (req, res) => {
  const { field } = req.params
  if (field === 'all') {
    Project.find()
      .then(project => {
        res.json(project)
      })
      .catch(err =>
        res
          .status(400)
          .json({ message: 'No Project found!', error: err.message })
      )
  } else {
    Project.find({ field })
      .then(project => {
        res.json(project)
      })
      .catch(err =>
        res
          .status(400)
          .json({ message: 'No Project found!', error: err.message })
      )
  }
}

//////////////////////Get Projects by university/////////////////////
exports.getAllProjectByUni = async (req, res) => {
  const { university } = req.params
  await Project.find({ university })
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err =>
      res.status(400).json({ message: 'No Project found!', error: err.message })
    )
}

// Post request
exports.postCreateProject = async (req, res) => {
  console.log('body: ', req.body)
  const { title, field, summary, members, image, university } = req.body
  console.log('image: ', image)
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'projects',
      width: 400,
      crop: 'scale'
    })
    console.log('result: ', result)
    const newProject = new Project({
      title,
      field,
      summary,
      members,
      image: {
        url: result.secure_url,
        public_id: result.public_id
      },
      university
    })
    newProject
      .save()
      .then(project => {
        console.log('project: ', project)
        res.status(200).json({ message: 'Project added successfully', project })
      })
      .catch(err => {
        console.log(err)
        res
          .status(400)
          .json({ message: 'Unable to add project', error: err.message })
      })
  } catch (err) {
    console.log(err)
    res
      .status(400)
      .json({ message: 'Unable to add project', error: err.message })
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
