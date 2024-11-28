import React from "react";

export const SideBar = () => {
    return (
        <div >
            <div className=" h-15 text-center py-4">
                <h2 className="text-2xl font-semibold">E Learn </h2>

            </div>
            <div>
                <ul className="flex flex-col gap-2 px-2 my-7">
                    <li className="  dark:hover:bg-slate-800 hover:bg-slate-200 px-3 py-2 rounded-lg cursor-pointer ">Courses </li>
                    <li className=" hover:bg-slate-200 px-3 py-2 rounded-lg cursor-pointer ">Create Course </li>
                    <li className=" hover:bg-slate-200 px-3 py-2 rounded-lg cursor-pointer ">Profile</li>
                    <li className=" hover:bg-slate-200 px-3 py-2 rounded-lg cursor-pointer ">User Management </li>
                    <li className=" hover:bg-slate-200 px-3 py-2 rounded-lg cursor-pointer ">Track Progress  </li>
                </ul>
            </div>
        </div>
    );
};
