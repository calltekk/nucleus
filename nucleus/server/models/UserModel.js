const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Create a user schema with the database properties
const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
            required: false
        },
        email: {
            type: String,
            default: '',
            required: true,
            unique: true
        },
        password: {
            type: String,
            default: '',
            required: true
        }
        // ,
        // tasks: {
        //     type: Array,
        //     default: [], 
        //     required: false
        // },
        // completed: {
        //     type: Array,
        //     default: [],
        //     required: false
        // }    
})

// static signup method
UserSchema.statics.signup = async function(name, email, password) {

    //validation for users signing up
    if (!email ||!password){
        throw Error('All fields must be filled in');
    };
    if (!validator.isEmail(email)){
        throw Error('Email is not valid');
    };
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough');
    };
    
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use');
    };

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create new document and pass in name, email, and hashed password
    const user = await this.create({ name, email, password: hash });

    // return user for when method is called 
    return user;
}

// static login method
UserSchema.statics.login = async function(email, password) {
    if (!email ||!password){
        throw Error('All fields must be filled in');
    };

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('Incorrect email');
    };

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw Error('Incorrect password');
    };

    return user;
}

module.exports = mongoose.model('users', UserSchema)
