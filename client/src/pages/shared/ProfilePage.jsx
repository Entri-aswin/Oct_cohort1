import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const ProfilePage = ({ role = "user" }) => {
    const user = {
        role: "user",
        profile_api: "/user/profile",
        logout_api: "/user/logout",
    };

    if (role === "mentor") {
        user.role = "mentor";
        user.profile_api = "/mentor/profile";
        user.logout_api = "/mentor/logout";
    }

    const [profile, isLoading, error] = useFetch(user.profile_api);
    const navigate = useNavigate();

    console.log("profile====", profile);
    const firstLetter = profile?.name?.slice(0, 1);
    console.log(firstLetter, "====firstLetter");

    const userLogout = async () => {
        try {
            const response = await axiosInstance({ method: "PUT", url: user });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <div className="uppercase w-32 h-32"> {firstLetter} </div>
                <h1 className="capitalize text-2xl">{profile?.name}</h1>
                <img src={profile?.profilePic} alt="image" />
            </div>

            <button className="btn btn-warning" onClick={userLogout}>
                Log out
            </button>
        </div>
    );
};
