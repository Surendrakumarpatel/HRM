import mongoose from "mongoose";
 
// Schema for Total Rooms in Hotel
const schema = new mongoose.Schema({
    noOfRoom:{
        type:Number,
    },
    roomType:{
        type:String
    },
    roomId:{
        type:Number
    },
    price: {
        type:Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
 
});
export const TotalRooms = mongoose.model("TotalRooms", schema);