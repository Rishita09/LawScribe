import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exporting the Feedback model as the default export
const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
