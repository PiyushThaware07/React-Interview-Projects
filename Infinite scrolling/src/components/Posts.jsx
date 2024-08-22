import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Posts() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    async function fetchPosts(currentPage) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${currentPage}`);
            const result = await response.json();
            setData((prev) => [...prev, ...result]);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    }

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    // SCROLL EVENT
    function handleInfiniteScroll() {
        const { scrollTop, scrollHeight } = document.documentElement;
        const innerHeight = window.innerHeight;

        if (scrollTop + innerHeight + 1 >= scrollHeight) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, []); // The empty dependency array ensures this effect runs only once

    return (
        <>
            <h1 className='text-3xl font-semibold mb-10 text-center'>Infinite Scroll</h1>

            <div className='app_posts grid grid-cols-3 gap-10'>
                {data.map((item) => (
                    <div className="card border-2 border-slate-900 rounded-xl p-10" key={item.id}>
                        <div className="circle p-2 inline font-semibold rounded-full bg-gray-100 text-sm">{item.id}</div>
                        <h1 className='mt-3 text-sm font-semibold capitalize'>{item.title}</h1>
                    </div>
                ))}


            </div>
            {loading && <AiOutlineLoading3Quarters className='animate-spin text-4xl text-center w-full my-10' />}
        </>
    );
}
