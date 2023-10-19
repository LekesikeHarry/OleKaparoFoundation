import asyncHandler from 'express-async-handler'
import UserModel from'../models/User.js' 
import generateToken from '../utils/generateToken.js'

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password} = req.body

    const userExists = await UserModel.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error('user already exists')
    }

    const user = await UserModel.create({
        username,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else {
        res.status(400)
        throw new Error("invalid user data")
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })

    if(user &&(await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})
export { registerUser, authUser }