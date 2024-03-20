require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/UserModel.js');
const TaskModel = require('./models/Tasks.js');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/tasks');

const requireAuth = require('./middleware/requireAuth');

//set  up express
const app = express(); 

//prepare cross origin for deployment
app.use(cors(
    // {
    //     origin: ["FRONTEND"],
    //     methods: ["POST", "GET", "PUT", "DELETE"],
    //     credentials: true
    // }
));

// parse data and require authentication for each endpoint
app.use(express.json());

// const router = express.Router();
// router.use(requireAuth);

//get request for all tasks from the database
// app.get('/tasks', (req, res) => {
//     TaskModel.find({})
//     .then(tasks => res.json(tasks))
//     .catch(err => res.json(err))
// })



// //add new task to the database
// app.post('/tasks', (req, res) => {
//     TaskModel.create(req.body)
//     .then(tasks => res.json(tasks))
//     .catch(err => res.json(err)) 
// })

// // retrieve a selected task from the database by id
// app.get('/tasks/:id', (req, res)=>{
//     const id = req.params.id;
//     TaskModel.findById({_id:id})
//     .then(tasks => res.json(tasks))
//     .catch(err => res.json(err))
// })

// //find a selected task by its id and update the task text
// app.put('/tasks/:id', (req, res) => {
//     const id = req.params.id;
//     TaskModel.findByIdAndUpdate({_id: id}, {newTaskText: req.body.newTaskText})
//     .then(tasks => res.json(tasks))
//     .catch(err => res.json(err))
// })

// //delete a task from the database
// app.delete('/tasks/:id', (req, res) => {
//     const id = req.params.id;
//     TaskModel.findByIdAndDelete({_id: id})
//     .then(res => res.json(res))
//     .catch(err => res.json(err))
// })

// route for the user
app.use('/api/user', userRoutes);

//route 
app.use('', taskRoutes);

// connect to the database using an environment variable
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// set up the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})