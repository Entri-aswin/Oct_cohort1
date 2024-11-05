import e from "express";

const router= e.Router();

router.post('/signup')
router.post('/login')
router.put('/reset-password')
router.put('/logout')
router.get('/profile')
router.put('/profile-update')
router.delete('/delete-account')

router.get('/check-user')


export {router as userRouter}