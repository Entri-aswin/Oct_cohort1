import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData, saveUserData } from "../redux/features/userSlice";

export const UserLayout = () => {
    const { isUserAuth, userData } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();


    const checkUser = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/check-user",
            });
            dispatch(saveUserData());
        } catch (error) {
            dispatch(clearUserData());
            console.log(error);
        }
    };

    console.log(isUserAuth, "isuserAuth");
    console.log(userData, "userData");

    useEffect(() => {
        checkUser();
    }, [location.pathname]);

    return (
        <div>
            {isUserAuth ? <UserHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
