import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
    const [profile, isLoading, error] = useFetch("/user/profile");
    const navigate = useNavigate();

    console.log("profile====", profile);
    const firstLetter = profile?.name?.slice(0, 1);
    console.log(firstLetter, "====firstLetter");

    const userLogout = async () => {
        try {
            const response = await axiosInstance({ method: "PUT", url: "/user/logout" });
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
                Log out{" "}
            </button>
        </div>
    );
};
