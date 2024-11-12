import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";

export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password, mobile, profilePic } = req.body;

        if (!name || !email || !password || !mobile) {
            return res.status(400).json({ message: "all fields required" });
        }

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, mobile, profilePic });
        await newUser.save();

        const token = generateToken(newUser, "user");
        res.cookie("token", token);

        res.json({ message: "user created successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};



export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "all fields required" });
        }

        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "user does not exist" });
        }

        const isPasswordMatch = bcrypt.compareSync(password, userExist.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "user not authenticated" });
        }

        if(userExist.isActive ==false){
            return res.status(401).json({message:'user has been banned'})
        }
        const token = generateToken(userExist,'user')
        res.cookie('token',token);

        res.json({ message: "user login successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};



export const userProfile = async (req, res, next) => {
    try {
        
     const userId =req.user.id;
     const userProfile = await User.findById(userId).select("-password");


        res.json({ message: "user login successfully", data:userProfile });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const userLogout = async (req, res, next) => {
    try {
        
     res.clearCookie('token');

        res.json({ message: "user logout success" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};


export const checkUser = async (req, res, next) => {
    try {
        

        res.json({ message: "user autherized" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
