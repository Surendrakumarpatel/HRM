import mongoose from "mongoose";
import validator from "validator";
 
// Schema for User's
const schema = new mongoose.Schema({
    email: {
            type: String,
            // required: [true, "Please enter your email"],
            unique: true,
            validate: validator.isEmail, 
        },
        room_no: {
            type: Number,
            // required: [true, "Please enter your email"],
        },
        start_date: {
            type: Date,  
            // required: [true, "Please enter start time"],
        },
        end_date: {
            type:Date,
            // required: [true, "Please enter end time"],
        },
     
    allbookings:[],

    createdAt: {
        type: Date,
        default: Date.now,
    },
 
});

export const User = mongoose.model("User", schema);