////////////////// Require all the packages /////////////////////
const Student = require("../models/student");

// /////////// Exporting all the controller functions ////////////////


// Get request
exports.getAllStudent = (req, res) => {
    const {id} = req.params;
    Student.find()
        .then((student) => {
            res.json(student);
        })
        .catch((err) =>
            res 
                .status(400)
                .json({message: "No Student found!", error: err.message})
        );
};

// Post request
exports.postCreateStudent = (req, res) => {
    Student.create(req.body)
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
exports.putUpdateStudent = (req, res) => {
    console.log("id: ", req.params.id);
    console.log("body: ", req.body);
    console.log(req.body);
    Student.findByIdAndUpdate(req.params.id, req.body)
        .then((student) => {
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
exports.deleteStudent = (req, res) => {
    Student.findByIdAndRemove(req.params.id)
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

