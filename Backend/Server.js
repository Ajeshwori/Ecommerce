import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json()); // for JSON requests
app.use(express.urlencoded({ extended: true })); 

// Connect DB
connectDB();

// Routes
app.use("/api", userRoutes);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
