import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/auth", authRoute);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
