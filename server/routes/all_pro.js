// //////// Require all the packages //////////////
const express = require("express");

const router = express.Router();

const {
    getAllProject,
    getAllProjectByUni,
    postCreateProject,
    putUpdateProject,
    deleteProject,
} = require("../controller/all_pro");

/**
 * @route GET api/project
 * @description get all projects by field
 * @access public
 */

 router.get("/project/:field", getAllProject);

/**
 * @route GET api/project
 * @description get all projects by university
 * @access public
 */

 router.get("/uniproject/:university", getAllProjectByUni);

 /**
  * @route POST api/project
  * @description Add a new Project
  * @access public
  */
 
 router.post("/project", postCreateProject);
 
 /**
  * @route PUT api/keep/:id
  * @description update keep
  * @access private
  */
 router.put("/project/:id", putUpdateProject);
 
 /**
  * @route DELETE api/keep/:id
  * @description delete keep by id
  * @access private
  */
 
 router.delete("/project/:id", deleteProject);
 
 module.exports = router;