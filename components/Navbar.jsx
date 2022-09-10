import React from "react";
import { FcSportsMode } from "react-icons/fc";

const Navbar = () => {
    return (
        <div className="flex justify-center w-full h-[60px] p-3 bg-gradient-to-r from-orange-500 to-teal-500">
            <h1 className="flex text-3xl text-white">
                <FcSportsMode className="mt-1 mr-2" />
                News Sport
            </h1>
        </div>
    );
};

export default Navbar;
