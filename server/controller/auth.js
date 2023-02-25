const Student = require('../models/student')
const Admin = require('../models/admin')


exports.loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userType = req.body.userType;

    if(userType == 'admin'){
        Admin.findOne({email: email, password: password}, (err, foundUser) =>{
            if(err){
                res.status(400).json({message: "Unable to login", error: err.message})
            }else{
                res.json({
                    message: "Login successful",
                    isAuthenticated: true,
                })
            }
        })
    }else if(userType == 'student'){
        Student.findOne({email: email, password: password}, (err, user)=>{
            if(err){
                res.status(400).json({message: "Unable to login", error: err.message})
            }else{
                res.json({
                    message: "Login successful",
                    isAuthenticated: true,
                })
            }
        })
    }
    else{
        res.status(400).json({message: "Unable to login", error: err.message})
    }
}