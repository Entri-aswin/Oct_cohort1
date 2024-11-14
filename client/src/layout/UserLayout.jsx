import React from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
