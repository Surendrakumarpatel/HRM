import mongoose from 'mongoose';

const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://0.0.0.0:27017/room-management", {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
        .then(() => {
            console.log("mongodb connected successfully!");
        }).catch((err) => {
            console.log(err);
        })

}
export default connectDB;
