import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected:');
    } catch (err) {
        console.error('mongoDB connection error:', err.message);
    }
};
export default connectDB;
