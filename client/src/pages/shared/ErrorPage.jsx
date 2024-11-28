import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ErrorPage = ({ role = "user" }) => {
    const url = {
        home: "/",
    };

    if (role == "mentor") {
        url.home = "/mentor/dashboard";
    }

    const naviagte = useNavigate();

    return (
        <div>
            <h1>404 Not Found!</h1>
            <h2 onClick={() => naviagte(url.home)}>Navigate to home</h2>
        </div>
    );
};
