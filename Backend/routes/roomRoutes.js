import express from "express";
import { totalRooms } from "../controllers/roomControllers.js";
import { getTotalRooms } from "../controllers/roomControllers.js";
 
const router = express.Router();


 router.route("/noofrooms").post(totalRooms);
 router.route("/gettotalnoofrooms").get(getTotalRooms);



 
export default router;

