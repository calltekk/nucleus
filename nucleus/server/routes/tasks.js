const express = require('express');
const TaskModel = require('../models/Tasks.js');

const requireAuth = require('../middleware/requireAuth');

const router = express.Router()
router.use(requireAuth);

router.get('/tasks', async (req, res) => {
    const user_id = req.user._id;
  
    const tasks = await TaskModel.find({ user_id })
  
    res.status(200).json(tasks)
  }
)

//add new task to the database
router.post('/tasks', async (req, res) => {
    // const {newTaskText, user_id} = req.body;
    const user_id = req.user._id;
    const newTaskText = req.body.newTaskText;
    await TaskModel.create({newTaskText, user_id})
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err)) 
    
   
})

// retrieve a selected task from the database by id
router.get('/tasks/:id', (req, res)=>{
    const id = req.params.id;
    TaskModel.findById({_id:id})
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

//find a selected task by its id and update the task text
router.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndUpdate({_id: id}, {newTaskText: req.body.newTaskText})
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

//delete a task from the database
router.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

module.exports = router