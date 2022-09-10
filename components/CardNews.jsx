import React from "react";
import Image from "next/image";

const CardNews = ({ title, imageUrl, author, date, klik }) => {
    return (
        <div className="h-auto m-4 border-2 rounded-lg bg-violet-50 w-60">
            <h1 className="my-2 font-bold text-center text-black">{title}</h1>
            <Image unoptimized={true} className="w-full h-52" src={imageUrl} alt={author} width={500} height={500} />
            <h2 className="mt-2 text-center text-black ">Author :{author}</h2>
            <p className="text-center text-black font-poppins">Date :{date}</p>
            <div className="flex justify-center pb-2 mt-2 text-white">
                <button onClick={klik} className="px-2 italic font-bold text-white rounded-full bg-gradient-to-r from-orange-500 via-emerald-700 to-green-700">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default CardNews;
