import './App.css';
import React, { useState } from 'react';
import initialData from './data';

export default function App() {
  const [data, setData] = useState(initialData);
  return (
    <main className='p-10 min-h-screen bg-gray-100'>
      <DropDown data={data} />
    </main>
  )
}




function DropDown({ data }) {
  const [expand, setExpand] = useState(false);
  return (
    <ul className=' relative'>
      <li className='p-2' onMouseEnter={() => setExpand(true)} onMouseLeave={() => setExpand(false)}>
        <h1 className='text-md font-semibold select-none cursor-pointer '>{data.name}</h1>
        <ul className={`${expand ? "" : "hidden"} ps-5`}>
          {
            data.items.map((element, index) => (
              <li className=''>
                <DropDown key={index} data={element} />
              </li>
            ))
          }
        </ul>
      </li>
    </ul>
  )
}