import e from "express";
import { userAuth } from "../middlewares/userAuth.js";
const router = e.Router();
import Stripe from "stripe";
const stripe = new Stripe(process.env.Stripe_Private_Api_Key);

const client_domain = process.env.CLIENT_DOMAIN;

router.post("/create-checkout-session", userAuth, async (req, res, next) => {
    try {
        const { products } = req.body;

        console.log("products=====",products);
        
        
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product?.courseId?.title,
                    images: [product?.courseId?.image],
                },
                unit_amount: Math.round(product?.courseId?.price * 100),
            },
            quantity: 1,
        }));
        
        console.log("lineItems=====",lineItems);
        

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${client_domain}/user/payment/success`,
            cancel_url: `${client_domain}/user/payment/cancel`,
        });

        res.json({ success: true, sessionId: session.id });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal server error-payment failed" });
    }
});


router.get("/session-status", async (req, res) => {
    try {
        const sessionId = req.query.session_id;
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        res.send({
            status: session?.status,
            customer_email: session?.customer_details?.email,
        });
    } catch (error) {
        res.status(error?.statusCode || 500).json(error.message || "internal server error");
    }
});


export { router as paymentRouter };
