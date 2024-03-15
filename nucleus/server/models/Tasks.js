import mongoose from 'mongoose';

// Create a tasks schema for the database fields
const TaskSchema = new mongoose.Schema({ 
        index: Number,
        newTaskText: String
})

export const TaskModel = mongoose.model('tasks', TaskSchema);
