import express from "express";
import { login } from "../controllers/userController";

const userRoute = express.Router();

userRoute.get("/auth", login);

export default userRoute;
