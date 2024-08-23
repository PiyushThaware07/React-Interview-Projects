import React, { useState } from 'react'
import { TiStarFullOutline } from "react-icons/ti";

export default function Method1() {
  const stars = 5;
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);
  return (
    <main className="h-screen w-screen flex flex-nowrap items-center justify-center flex-col">
      <h1 className="text-2xl font-semibold">Machine Coding Round - Rating</h1>
      <div className="flex flex-nowrap items-center justify-center mt-5">
        {
          new Array(stars).fill(0).map((_, index) => (
            <button key={index} className="border-0 mx-1" onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)} >
              <TiStarFullOutline className={`text-5xl transition delay-150 duration-100 ${index <= rating || index <= hover ? "text-yellow-400" : "text-gray-300"}`} />
            </button>
          ))
        }
      </div>
    </main>
  )
}
