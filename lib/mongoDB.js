import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.error(error);
  }
};
export default connectToDatabase;
