// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Create a tasks schema for the database fields
const TaskSchema = new mongoose.Schema({ 
        // index: Number,
        // newTaskText: String
        newTaskText: {
                type: String,
                required: true
        },
        user_id: {
                type: String,
                required: true
        }
})

module.exports = mongoose.model('tasks', TaskSchema)
