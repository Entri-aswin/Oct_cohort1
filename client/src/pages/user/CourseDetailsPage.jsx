import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";

export const CourseDetailsPage = () => {
    const { id } = useParams();

    const [courseDetails, isLoading, error] = useFetch(`/course/get-courseDetails/${id}`);

    const handleAddToCart = async () => {
        try {
            const response = await axiosInstance({
                url: "/cart/add-to-cart",
                data: { courseId: courseDetails?._id },
                method: "POST",
            });
            toast.success("product added to cart");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "unable to add to cart");
        }
    };

    return (
        <div>
            <div>
                <h1>{courseDetails?.title} </h1>
            </div>
            <div>
                <img src={courseDetails?.image} alt="" />
            </div>
            <button className="btn btn-success" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};
