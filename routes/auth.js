const express = require('express')
const router = express.Router()

const { loginUser, verifyJWT } = require('../controller/auth')

/**
 * @route POST api/login
 * @description login user
 * @access public
 **/
router.post('/login', loginUser)

/**
 * @route GET api/isUserAuth
 * @description authenticate user
 * @access private
 */

router.get('/isUserAuth', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, userId: req.userId, firstname: req.firstname, userType: req.userType})
})

module.exports = router
