import React, { useState } from "react";
import { Carrousel } from "../../components/user/Carrousel";

export const Home = () => {
    const [user, setUser] = useState("");

    return (
        <div className="px-20">
            <section className="min-h-96 flex gap-20 px-20 py-10 w-full">
                <div className="w-8/12">
                    <h1 className="font-bold text-4xl my-5  ">Welcome {user} </h1>
                    <p className="text-xl font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur ratione sint odit minus, saepe distinctio
                        cupiditate necessitatibus nemo, laboriosam perspiciatis vero blanditiis, ut corrupti!
                    </p>
                </div>
                <div className="w-5/12">
                    <img
                        className="w-full"
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt="home-image"
                    />
                </div>
            </section>
            {/* <section class="min-h-96 flex gap-20 px-20 py-10 w-full animate-pulse">
                <div class="w-8/12">
                    <div class="h-10 bg-gray-200 rounded mb-5"></div>
                    <div class="h-6 bg-gray-200 rounded w-full"></div>
                    <div class="h-6 bg-gray-200 rounded w-2/3 mt-3"></div>
                    <div class="h-6 bg-gray-200 rounded w-1/2 mt-3"></div>
                </div>
                <div class="w-5/12">
                    <div class="w-full h-64 bg-gray-200 rounded"></div>
                </div>
            </section> */}
            <section className="my-16">
                <Carrousel />
            </section>
        </div>
    );
};
