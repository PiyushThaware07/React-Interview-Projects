import React, { useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";

export default function Method2() {
    const stars = 5;
    const [rating, setRating] = useState(-1);

    function handleChange(event) {
        const value = parseInt(event.target.value);
        if (event.key === "Enter") {
            if (value <= stars) {
                setRating(value - 1);
            }
            else {
                alert("invalid input");
            }
        }
    }

    return (
        <main className='h-screen w-screen flex flex-nowrap items-center justify-center'>
            <div className="">
                <input type="number" placeholder='Rating' className='p-2 border-2 border-slate-900 rounded text-sm font-semibold'
                    onKeyDown={handleChange} />

                {/* Ratings */}
                <ul className='mt-5 flex flex-nowrap items-center gap-3 justify-center'>
                    {
                        new Array(stars).fill(0).map((_, index) => (
                            <li key={index}>
                                <TiStarFullOutline className={`text-3xl ${index <= rating ? "text-yellow-400" : "text-slate-300/70"} `} />
                            </li>
                        ))
                    }
                </ul>
            </div>

        </main>
    )
}
