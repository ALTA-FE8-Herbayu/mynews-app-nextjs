import axios from "axios";
import React from "react";
import NavBar from "../components/Navbar";
import Router, { useRouter } from "next/router";
import CardNews from "../components/CardNews";

export const getServerSideProps = async () => {
    const response = await axios.get(`https://inshorts.deta.dev/news?category=sports`);
    const listNews = response.data.data;
    return {
        props: {
            listNews: listNews,
        },
    };
};

const ServerSideRendering = ({ listNews }) => {
    const router = useRouter();

    const ReadMore = (item) => {
        Router.push({
            pathname: `/${item.author}`,
            query: {
                title: item.title,
                author: item.author,
                content: item.content,
                date: item.date,
                imageUrl: item.imageUrl,
                readMoreUrl: item.readMoreUrl,
            },
        });
    };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-evenly ">
                    {listNews.map((item, index) => {
                        return (
                            <div key={index}>
                                <CardNews title={item.title} imageUrl={item.imageUrl} author={item.author} date={item.date} klik={() => ReadMore(item)} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServerSideRendering;
