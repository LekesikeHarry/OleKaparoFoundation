import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const { Schema, model } = mongoose; 


const UserSchema = new Schema({
    username: { 
        type: String,
        required: true,
        min: 4,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const UserModel = model('User', UserSchema)

export default UserModel