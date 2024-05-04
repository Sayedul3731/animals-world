import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("mongoDB connect successfully");
  } catch (error) {
    console.error(error);
  }
};
export default connectToDatabase;
