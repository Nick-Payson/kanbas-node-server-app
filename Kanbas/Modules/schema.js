import mongoose, { Schema } from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: String,
    description: String,
    course: Schema.Types.ObjectId,
    lessons: Array,
  },
  { collection: "modules" }
);
export default moduleSchema;