import e from "express";
import { checkMentor, mentorLogin, mentorLogout, mentorProfile, mentorSignup } from "../controllers/mentorControllers.js";
import { mentorAuth } from "../middlewares/mentorAuth.js";

const router = e.Router();

router.post("/signup", mentorSignup);
router.post("/login", mentorLogin);
router.put("/logout", mentorAuth, mentorLogout);
router.get("/profile", mentorAuth, mentorProfile);
router.put("/reset-password");
router.put("/profile-update");
router.delete("/delete-account");

router.get("/fetch-userList");
router.get("/fetch-mentors");

router.get("/check-mentor", mentorAuth, checkMentor);

export { router as mentorRouter };
