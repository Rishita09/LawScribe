import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      password,
    });

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "30d",
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
        expiresIn: "30d",
      });

      res.json({
        _id: user._id,
        username: user.username,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
