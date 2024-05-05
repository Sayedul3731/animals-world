import mongoose from "mongoose";
const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Animal = mongoose.model("Animal", animalSchema);
export default Animal;
