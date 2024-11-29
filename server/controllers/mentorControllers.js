import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";
import { Mentor } from "../models/mentorModel.js";

export const mentorSignup = async (req, res, next) => {
    try {
        const { name, email, password, mobile, profilePic } = req.body;

        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ message: "all fields required" });
        }

        const userExist = await Mentor.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "mentor already exist" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new Mentor({ name, email, password: hashedPassword, mobile, profilePic });
        await newUser.save();

        const token = generateToken(newUser, "mentor");
        res.cookie("token", token);

        res.json({ message: "mentor created successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const mentorLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "all fields required" });
        }

        const userExist = await Mentor.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "mentor does not exist" });
        }

        const isPasswordMatch = bcrypt.compareSync(password, userExist.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "mentor not authenticated" });
        }

        const token = generateToken(userExist, "mentor");
        res.cookie("token", token);

        res.json({ message: "mentor login successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const mentorProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const userProfile = await Mentor.findById(userId).select("-password");

        res.json({ message: "user login successfully", data: userProfile });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const mentorLogout = async (req, res, next) => {
    try {
        res.clearCookie("token");

        res.json({ message: "user logout success" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkMentor = async (req, res, next) => {
    try {
        res.json({ message: "mentor autherized" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
