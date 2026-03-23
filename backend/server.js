import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://powerhouse-jade.vercel.app",
        /http:\/\/localhost:\d+/
      ];
      if (!origin || allowedOrigins.some(ao => (typeof ao === 'string' ? ao === origin : ao.test(origin)))) {
        callback(null, true);
      } else {
        callback(null, true); // Temporarily allow all for easier debugging during setup
      }
    },
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Gym backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
