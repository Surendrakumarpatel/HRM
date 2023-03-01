import express from "express";
import {createBooking, deleteBooking, updateBooking} from "../controllers/userControllers.js";
import { getAllBookedRoom } from "../controllers/userControllers.js";
 
const router = express.Router();


router.route("/booking").post(createBooking);
router.route("/allbooking").get(getAllBookedRoom);
router.route("/updatebooking/:id").put(updateBooking);
router.route("/updatebooking/:id").delete(deleteBooking);
 

export default router;

