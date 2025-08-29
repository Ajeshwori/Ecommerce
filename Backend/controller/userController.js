import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Singup or Register

export const register = async (req, res) => {
    try {
         console.log("Request body:", req.body); // Debug

    const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Remove password from response
        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: "User Register successfully",
            user: userResponse,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};



// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.status(401);
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ id: user._id },
     process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN || "24h", // fallback to 24h if not set
});


  res.status(200).json({
    message: "Login successful",
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
};

// GET PROFILE (protected route example)
export const getProfile = async (req, res) => {
  res.json({
    message: "Profile fetched successfully",
    user: req.user,
  });
};
