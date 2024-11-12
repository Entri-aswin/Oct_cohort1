import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
import { addCourseToCart, getCart, removeCourseFromCart } from "../controllers/cartControllers.js";
const router = e.Router();

router.get("/get-cart-items", userAuth, getCart);
router.post("/add-to-cart",userAuth,addCourseToCart);
router.delete("/remove-cart-item",userAuth,removeCourseFromCart);

export { router as cartRouter };
