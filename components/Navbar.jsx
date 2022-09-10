import React from "react";
import { FcSportsMode } from "react-icons/fc";

const Navbar = () => {
    return (
        <div className="flex justify-center w-full h-20 p-3 bg-gradient-to-r from-orange-500 via-emerald-700 to-green-700">
            <h1 className="flex my-auto text-3xl text-white">
                <FcSportsMode className="mt-1 mr-2" />
                News Sport
            </h1>
        </div>
    );
};

export default Navbar;
