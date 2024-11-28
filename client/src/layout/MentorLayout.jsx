import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MentorHeader } from "../components/mentor/MentorHeader";
import { MentorFooter } from "../components/mentor/MentorFooter";
import { SideBar } from "../components/mentor/SideBar";

export const MentorLayout = () => {
    const [isMentorAuth, setIsMentorAuth] = useState(true);
    

    return (
        <div className="flex flex-row ">
            {isMentorAuth && (
                <div className="w-2/12 shadow-xl">
                    <SideBar />
                </div>
            )}
            <div className="w-full">
                <MentorHeader />
                <Outlet />
                <MentorFooter />
            </div>
        </div>
    );
};
