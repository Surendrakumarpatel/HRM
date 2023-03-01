import app from "./app.js";
import connectDB from "./database/connectDb.js";
connectDB();
const PORT = process.env.PORT || 5000;
 
app.listen((PORT) , ()=>{
    console.log(`Server running at port ${PORT}`);
});



