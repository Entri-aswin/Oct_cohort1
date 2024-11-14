import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
import { addReview, deleteReview, getAverageRating, getCourseReviews } from "../controllers/reviewControllers.js";
const router = e.Router();

router.post("/add-review",userAuth,addReview)
router.get("/get-course-reviews/:courseId",userAuth,getCourseReviews)
router.delete('/delete-review/:reviewId',userAuth,deleteReview)
router.get('/get-avg-rating/:courseId',userAuth,getAverageRating)


export { router as reviewRouter };
