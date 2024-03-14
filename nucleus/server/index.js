import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express(); 

app.use(cors(
    // {
    //     origin: ["FRONTEND"],
    //     methods: ["POST", "GET", "PUT", "DELETE"],
    //     credentials: true
    // }
));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})