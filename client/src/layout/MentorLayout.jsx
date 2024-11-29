import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MentorHeader } from "../components/mentor/MentorHeader";
import { MentorFooter } from "../components/mentor/MentorFooter";
import { SideBar } from "../components/mentor/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { clearMentorData, saveMentorData } from "../redux/features/mentorSlice";
import { axiosInstance } from "../config/axiosInstance";

export const MentorLayout = () => {
    // const [isMentorAuth, setIsMentorAuth] = useState(true);

    const { isMentorAuth, mentorData } = useSelector((state) => state.mentor);
    const dispatch = useDispatch();
    const location = useLocation();

    const checkMentor = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/mentor/check-mentor",
            });
            console.log(response, "=====response");

            dispatch(saveMentorData());
        } catch (error) {
            dispatch(clearMentorData());
            console.log(error);
        }
    };

    useEffect(() => {
        checkMentor();
    }, [location.pathname]);

    return (
        <div className="flex flex-row min-h-dvh ">
            {isMentorAuth && (
                <div className="w-2/12 shadow-xl">
                    <SideBar />
                </div>
            )}
            <div className="w-full">
                <MentorHeader />
                <div className="min-h-96">
                    <Outlet />
                </div>
                <MentorFooter />
            </div>
        </div>
    );
};
