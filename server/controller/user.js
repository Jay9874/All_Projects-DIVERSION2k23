////////////////// Require all the packages /////////////////////
const Student = require("../models/student");
const Admin = require("../models/admin");

const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
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
exports.postCreateStudent = async(req, res) => {
    const user = req.body;
    const takenUsername = await Student.findOne({username: user.username});
    const takenEmail = await Student.findOne({email: user.email});
    if(takenUsername || takenEmail) {
        return res.status(400).json({message: "Username or Email already taken!"});
    }
    user.password = await bcrypt.hash(user.password, 10);
    const newStudent = new Student(user);
    newStudent.save((err, student) => {
        if(err) {
            return res.status(400).json({message: "Unable to save student to DB", error: err.message});
        }
        res.json({message: "Student saved successfully", student});
    });

};

exports.postCreateAdmin = async(req, res) => {
    const user = req.body;
    console.log(user)
    // res.status(200).json({message: "Admin saved successfully", user});
    const takenUsername = await Admin.findOne({username: user.username});
    const takenEmail = await Admin.findOne({email: user.email});

    if(takenUsername || takenEmail) {
        return res.status(400).json({message: "Username or Email already taken!"});
    }
    user.password = await bcrypt.hash(user.password, 10);
    const newAdmin = new Admin(user);
    newAdmin.save((err, admin) => {
        if(err) {
            return res.status(400).json({message: "Unable to save admin to DB"});
        }
        res.json({message: "Admin saved successfully", admin});
    });
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

