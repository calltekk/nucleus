const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '10d'});
}


//signup user
const signupUser = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const user = await User.signup(name, email, password);

        // create a token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


// login user
const loginUser = async (req, res) => {
    
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);

        // create a token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { signupUser, loginUser }