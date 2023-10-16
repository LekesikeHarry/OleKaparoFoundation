import express from'express'
const app = express();
import {  mongoose } from'mongoose'
import UserModel from'./models/User.js' 
import bodyParser from'body-parser'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'

mongoose.connect('mongodb://harry:harry@ac-of9oeck-shard-00-00.onubql5.mongodb.net:27017,ac-of9oeck-shard-00-01.onubql5.mongodb.net:27017,ac-of9oeck-shard-00-02.onubql5.mongodb.net:27017/?replicaSet=atlas-t4d9pi-shard-0&ssl=true&authSource=admin')

app.use(express.json());
// Define your routes and route handlers here
dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/api/users/', userRoutes)

// app.post('/register', async (req, res) => {
//     try {
//         const { username, password } = req.body;
        
//         const newUser = new UserModel({
//             username, 
//             password,
//         })

//         const savedUser = await newUser.save();

//         res.status(201).json(savedUser)
//     } catch (error) {
//         res.status(400).json({ error: 'Registration failed' });

//     }
// })