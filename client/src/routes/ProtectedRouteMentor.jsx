import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRouteMentor = () => {
    const { isMentorAuth } = useSelector((state) => state.mentor);
    const navigate = useNavigate();

    if (!isMentorAuth) {
        navigate("/mentor/login");
        return;
    }

    return isMentorAuth && <Outlet />;
};
