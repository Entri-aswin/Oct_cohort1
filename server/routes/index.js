import e from "express";
import { userRouter } from "./userRoutes.js";
import { mentorRouter } from "./mentorRoutes.js";
import { courseRouter } from "./courseRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";

const router  = e.Router()

router.use('/user', userRouter)
router.use('/mentor', mentorRouter)
router.use("/course", courseRouter)
router.use("/review", reviewRouter)

export { router as apiRouter }