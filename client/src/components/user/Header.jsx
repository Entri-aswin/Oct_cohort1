import React from "react";

export const Header = () => {
    return (
        <div className="px-20 py-4 flex w-100 items-center justify-between bg-slate-800">
            <div className="text-3xl">Logo</div>
            <nav>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                </ul>
            </nav>
            <div>
                <button>Join Us</button>
            </div>
        </div>
    );
};
