import "./App.css";
import React, { useState } from 'react';

export default function App() {
  const [choice, setChoice] = useState(0);
  const [winner, setWinner] = useState("");

  function handleSelectChoice(index) {
    setChoice(index);
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(choice, randomNumber);
    if (randomNumber === choice) {
      setWinner("User Win's");
    }
    else {
      setWinner("Computer Win's")
    }
  }

  return (
    <main className='min-h-screen bg-blue-100 w-full flex flex-nowrap flex-col items-center justify-center'>
      <ul className='h-[300px] w-[300px] grid grid-cols-3 gap-3 items-center'>
        {
          new Array(9).fill(null).map((_, index) => (
            <li key={index + 1} className='h-[80px] w-[80px] bg-blue-300 border-2 border-blue-400 rounded-lg cursor-pointer flex flex-nowrap items-center justify-center hover:scale-110 transition-all duration-500' onClick={() => handleSelectChoice(index + 1)}>
              <h1 className='text-2xl font-medium text-blue-500 select-none'>{index + 1}</h1>
            </li>
          ))
        }
      </ul>
      <div className="text-xl font-medium mt-10">
        {winner !== "" && winner}
      </div>
    </main>
  )
}
