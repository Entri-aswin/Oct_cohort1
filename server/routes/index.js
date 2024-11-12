import e from "express";
import { userRouter } from "./userRoutes.js";
import { mentorRouter } from "./mentorRoutes.js";
import { courseRouter } from "./courseRoutes.js";

const router  = e.Router()

router.use('/user', userRouter)
router.use('/mentor', mentorRouter)
router.use("/course", courseRouter)

export { router as apiRouter }