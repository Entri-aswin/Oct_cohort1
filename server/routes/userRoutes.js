import e from "express";
import { checkUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userControllers.js";
import { userAuth } from "../middlewares/userAuth.js";

const router= e.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)

router.get('/profile',userAuth,userProfile)
router.put('/logout',userAuth ,userLogout   )


router.put('/reset-password')
router.put('/profile-update')
router.delete('/delete-account')

router.get('/check-user',userAuth ,checkUser)


export {router as userRouter}