import { cloudinaryInstance } from "../config/cloudinary.js";
import { Course } from "../models/courseModel.js";

export const getAllCourse = async (req, res, next) => {
    try {
        const courseList = await Course.find();

        res.json({ message: "course-list fetched", data: courseList });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getCourseDetails = async (req, res, next) => {
    try {
        const { courseId } = req.params;

        const courseData = await Course.findById(courseId).populate("mentor");

        res.json({ message: "course data fetched", data: courseData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const createCourse = async (req, res, next) => {
    try {
        const { title, description, price, duration, image, mentor } = req.body;

        const mentorId = req.user.id;

        if (!title || !description || !price || !duration) {
            return res.status(400).json({ message: "all fields required" });
        }

        console.log(req.file, "======req.file");

        const imageUrl = (await cloudinaryInstance.uploader.upload(req.file.path)).url;

        const courseData = new Course({ title, description, price, duration, image: imageUrl, mentor: mentorId });
        await courseData.save();

        return res.json({ message: "course data fetched", data: courseData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
