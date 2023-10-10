const User = require('../models/users');
const jwt  = require('jsonwebtoken');


// User Signup

exports.signUp = (req,res)=>{
    const user = new User({
        email: req.body.email,
        password:req.body.password,
        name: req.body.name
    })
    user.save().then((savedUser) => {
        return res.status(201).json({ success: true, data: savedUser })
    }).catch((err) => {
        return res.status(500).json({ success: false, err })
    });
}    

// User Signin

exports.signIn = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({ email, password }).then((user) => {
        if (user === null) {
            return res.status(404).json({ success: false, err: 'Incorrect email or password!' })
        } else {
            const token = jwt.sign({ _id: user._id }, 'kdkjj23', { expiresIn: '2h' });
            res.cookie("token", token)
            return res.status(200).json({ token,success: true, message: 'Authenticated successfully!' })
        }
    }).catch((err) => {
        return res.status(404).json({ success: false, err})
    })
}


// User Authentication

exports.isAuthenticated = (req,res,next)=>{

    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1]; 
    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token missing' });
    } 
    // Verify and decode the token
    jwt.verify(token, 'kdkjj23', (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: 'Forbidden - Invalid token' });
      }  
      req.user = user;
    //   console.log(req.user);
      next(); 
    });
}


// User viewProfile

exports.viewProfile = async(req,res) =>{
    try {
        const userId = req.user;
        const user = await User.findOne({_id:userId});   
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }   
        res.json({ user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

// User signout

exports.signOut = (req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({status:true,message:'User signed out successfully!'})
    } catch (error) {
        res.status(500).json({status:true,message:'Unable to sign out !'})
    }
}

