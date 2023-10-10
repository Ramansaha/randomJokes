const express = require('express');
const router = express.Router();

const {signIn,signUp,signOut,isAuthenticated, viewProfile} = require('../controllers/userController');

router.post('/signin',signIn);
router.post('/signup',signUp);
router.get('/me',isAuthenticated,viewProfile);
router.get('/signout',signOut);

module.exports = router;