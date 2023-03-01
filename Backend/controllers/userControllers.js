import { User } from "../models/User.js";

/** Create booking rooms for users **/
export const createBooking = async (req, res) => {
    const { email, room_no, start_date, end_date, allbookings } = req.body;
    if (!email || !room_no || !start_date || !end_date)
        return res.status(400).json({
            success: true,
            message: "Please enter all fields"
        });

    let user = await User.findOne({ email });

    if (user)
        return res.status(400).json({
            success: true,
            message: "User Already Exits"
        });

    user = await User.create({
        email,
        room_no,
        start_date,
        end_date,
        allbookings
    });
    res.status(200).json({
        success: true,
        user,
    });
};



/** Read all booking rooms for users **/
export const getAllBookedRoom = async (req, res) => {
    const users = await User.find({});
    // returning the response to the frontend 
    res.status(200).json({
        success: true,
        users
    })
}


// update user details
export const updateBooking = async (req, res) => {
    let user = await User.findById(req.params.id);
    
    if (!user) {
        return res.status(500).json({
            success: false,
            message: "Booking Not Found!"
        })
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        success: true,
        message: "Booking Updated Successfully!"
    })
 

};
// update user details
export const deleteBooking = async (req, res) => {
    let user = await User.findById(req.params.id);
    
    if (!user) {
        return res.status(500).json({
            success: false,
            message: "Booking Not Found!"
        })
    }
    
    await user.remove();
     
    res.status(200).json({
        success: true,
        message: "Booking Deleted Successfully!"
    })
 

};



