////////////////// Require all the packages /////////////////////
const Project = require("../models/project");

// /////////// Exporting all the controller functions ////////////////


// Get request
exports.getAllProject = (req, res) => {
    Project.find()
        .then((project) => {
            res.json(project);
        })
        .catch((err) =>
            res 
                .status(400)
                .json({message: "No Project found!", error: err.message})
        );
};

// Post request
exports.postCreateProject = (req, res) => {
    Project.create(req.body)
        .then((data) => {
            res.json({message: "Project created successfully!", data});
        })
        .catch((err) => 
            res.status(400).json({
                message: "unable to add keep",
                error: err.message,
            })
        );
};

// Put request
exports.putUpdateProject = (req, res) => {
    console.log("id: ", req.params.id);
    console.log("body: ", req.body);
    console.log(req.body);
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then((project) => {
            console.log("edit: ", {keep});
            return res.json({message: "updated successfully", keep});
        })
        .catch((err) => 
            res.status(400).json({
                message: "unable to update to do",
                error: err.message,
            })
        );  
};  

// Delete request 
exports.deleteProject = (req, res) => {
    Project.findByIdAndRemove(req.params.id)
        .then((data) => {
            console.log("deleted: ", {data});
            res.json({message: "Project deleted successfully", data});
        })      
        .catch((err) => 
            res
                .status(400)
                .json({
                message: "Project could not be deleted",
                error: err.message,
            })
        )
};

