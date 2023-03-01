import {TotalRooms} from "../models/TotalRooms.js";


export const totalRooms = async(req, res)=>{
    const {totalNumOfRooms, price} = req.body;
    if (!totalNumOfRooms || !price)
        return res.status(400).json({
            success:true,
            message:"Please enter all fields"
        });
 
    let rooms = await TotalRooms.create({
        totalNumOfRooms,
        price
    });
    res.status(200).json({
        success: true,
        rooms,
    });
}

/* Getting totalRooms */
export const getTotalRooms = async(req, res)=>{
    const users = await TotalRooms.find({});
    // returning the response to the frontend 
    res.status(200).json({
        success: true,
        users
    })
}
 