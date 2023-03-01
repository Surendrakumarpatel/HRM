import express  from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import user from "./routes/userRoutes.js"
import rooms from "./routes/roomRoutes.js";
 
config({
    path:"./config/config.env"
})

const app = express();

// using middlewares
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
 
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// importing & using routes
app.use("/api/v1",user);
app.use("/api/v1",rooms);
 
 

export default app;
 