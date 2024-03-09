import express from "express";
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
const app = express();
dotenv.config();
var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
};
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
mongoose
  .connect("mongodb://mongo-database/tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log("Mongo Error", error.message));
