import mongoose from 'mongoose';

// Create a user schema with the database fields
const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
            required: false
        },
        tasks: {
            type: Array,
            default: [], 
            required: false
        },
        completed: {
            type: Array,
            default: [],
            required: false
        }    
})

export const UserModel = mongoose.model('users', UserSchema);
