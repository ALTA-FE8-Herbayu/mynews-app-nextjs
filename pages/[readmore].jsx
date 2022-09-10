import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

const ReadMore = () => {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <div className="flex justify-center sm:pt-20">
                <div className="p-10 rounded-lg bg-slate-700/20 sm:w-9/12">
                    <div className="flex justify-center sm:flex-none">
                        <h1 className="text-2xl font-bold text-center sm:mb-12">{router.query.title}</h1>
                    </div>
                    <img src={router.query.imageUrl} className="w-auto mr-4 h-52 sm:float-left" alt={router.query.title} />
                    <p className="mb-16 text-justify">{router.query.content}</p>
                    <br />
                    <div className="flex flex-col">
                        <h3 className="">Date: {router.query.date}</h3>
                        <h3>Author: {router.query.author}</h3>
                        <button className="px-4 italic text-white bg-blue-700 rounded-full">
                            <a href={router.query.readMoreUrl}>Read More News</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadMore;
