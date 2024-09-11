import express from "express";
import Feedback from "../model/Feedback.js";

const router = express.Router();

// Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
