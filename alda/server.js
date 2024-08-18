import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./src/components/auth/routes/index.js";
import blogRoutes from "./src/components/auth/routes/blogRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

mongoose
  .connect("mongodb://localhost:27017/alda", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
