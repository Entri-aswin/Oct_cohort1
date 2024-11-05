import { connect } from "mongoose";

const mongo_uri=process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        const response = await connect(mongo_uri);
        console.log('db connected successfully');
        
    } catch (error) {
        console.log(error);
    }
};
