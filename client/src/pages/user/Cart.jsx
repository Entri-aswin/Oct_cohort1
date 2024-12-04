import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Card";
import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../../config/axiosInstance";

export const Cart = () => {
    const [cartDetails, isLoading, error] = useFetch("/cart/get-cart-items");

    console.log('cartDetails======',cartDetails?.courses);
    

    const makePayment = async () => {
        try {
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

            const session = await axiosInstance({
                url: "/payment/create-checkout-session",
                method: "POST",
                data: { products: cartDetails?.courses },
            });
            console.log(session, "=======session");

            const result = stripe.redirectToCheckout({
                sessionId: session?.data?.sessionId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <h2>Cart Page </h2>
            </div>

            <div>
                {cartDetails?.courses?.map((value) => (
                    <CartCards key={value?._id} item={value} />
                ))}
            </div>

            <div>
                <button className="btn btn-accent" onClick={makePayment}>
                    Checkout
                </button>
            </div>
        </div>
    );
};
