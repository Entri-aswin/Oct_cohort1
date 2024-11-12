import e from "express";
import { createCourse, getAllCourse, getCourseDetails } from "../controllers/courseControllers.js";
import { upload } from "../middlewares/multer.js";
import { mentorAuth } from "../middlewares/mentorAuth.js";
const router = e.Router();

router.get("/get-all-courses", getAllCourse);
router.get("/get-courseDetails/:courseId", getCourseDetails);
router.post("/create-course",mentorAuth, upload.single('image'), createCourse);
router.put("/update-course",);
router.delete("/course-delete");

router.get("/get-latest-course");
router.get("/search-courses");

export { router as courseRouter };
