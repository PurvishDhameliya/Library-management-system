import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check for required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the user already exists
    const userExist = await User.findOne({ email });

    // Check user existence
    if (userExist) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Bcrypt hashing password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user with hashed password
    const user = new User({ name, email, password: hashedPassword });

    // Save user
    await user.save();

    // Response message
    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//login api
export const signinController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find email unique
    const validUser = await User.findOne({ email });
    // check user valid or not
    if (!validUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // compare password with bcrypt in signup hashSync
    const validPassword = bcrypt.compareSync(password, validUser.password);
    // check passowrd valid or not
    if (!validPassword) {
        return res
        .status(401)
        .json({ message: "wrong password" });
    }
    // give token from jsonwebtoken
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // desturcture password from validUser for password as it is in db
    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
