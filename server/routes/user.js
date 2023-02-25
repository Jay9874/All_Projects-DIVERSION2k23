// //////// Require all the packages //////////////
const express = require("express");

const router = express.Router();

const {
    getAllStudent,
    postCreateStudent,
    putUpdateStudent,
    deleteStudent,
} = require("../controller/user");

/**
 * @route GET api/student
 * @description get all students
 * @access private
 */

 router.get("/student", getAllStudent);

 /**
  * @route POST api/student
  * @description Add a new student
  * @access private
  */
 
 router.post("/student", postCreateStudent);
 
 /**
  * @route PUT api/student/:id
  * @description update student
  * @access private
  */
 router.put("/student/:id", putUpdateStudent);
 
 /**
  * @route DELETE api/student/:id
  * @description delete student by id
  * @access private
  */
 
 router.delete("/student/:id", deleteStudent);
 
 module.exports = router;