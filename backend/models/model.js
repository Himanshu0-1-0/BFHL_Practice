const mongoose= require("mongoose")


const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    roll_no: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const model = mongoose.model("datas",userSchema) /// datas-> collection in mongosh

// const a=await model.create({})   at creation time


module.exports = model