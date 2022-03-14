const express = require("express")
const app = express()
const mongoose = require("mongoose")

let userSchema = new Schema({
    firstName:{type:String, required: require},
    middleName:{type:String},
    lastName: {type: String, required: require},
    age: {type: Number, required: require},
    email:{type: String, required: require},
    address:{type: String, required: require},
    
})


