import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Card";

export const Cart = () => {
    const [cartDetails, isLoading, error] = useFetch("/cart/get-cart-items");

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
        </div>
    );
};
