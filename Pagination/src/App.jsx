import "./App.css";
import React, { useEffect, useState } from 'react';
import { TbCircleCheckFilled } from "react-icons/tb";

export default function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);

  async function handleFetchTodos() {
    const request = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await request.json();
    setTodos(response);
  }

  useEffect(() => {
    handleFetchTodos();
  }, [])

  function handleSelectPage(selectedPage) {
    const totalPages = todos.length / 10;
    if (selectedPage > 0 && selectedPage <= totalPages) {
      setPage(selectedPage);
    }
  }

  console.log(page);

  return (
    todos && todos.length > 0
    &&
    <main className='p-6 max-w-3xl mx-auto'>
      <table className="border-2 border-slate-900 min-h-[400px]">

        <thead>
          <tr className='bg-slate-900 text-white'>
            <td className='px-9 py-2 text-xs font-medium capitalize'>#</td>
            <td className='px-9 py-2 text-xs font-medium capitalize'>title</td>
            <td className='px-9 py-2 text-xs font-medium capitalize'>completed</td>
          </tr>
        </thead>

        <tbody>
          {
            todos.slice(page * 10 - 10, page * 10).map((item, index) => (
              <tr key={index}>
                <td className='px-7 py-2 text-xs font-medium capitalize'>{item.id}</td>
                <td className='px-7 py-2 text-xs font-medium capitalize'>{item.title}</td>
                <td className='px-7 py-2 text-xs font-medium capitalize'>
                  {item.completed && <TbCircleCheckFilled className="text-green-500 text-xl" />}
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>


      <div className="pagination mt-4">
        <ul className="flex flex-wrap items-center gap-2">
          <li className={`${page > 1 ? "block" : "hidden"}`}>
            <button className="text-xs font-semibold rounded bg-slate-100 px-3 py-2 hover:bg-slate-900 hover:text-white" onClick={() => handleSelectPage(page - 1)}>PERV</button>
          </li>
          {
            [...Array(todos.length / 10)].map((item, index) => (
              <li key={index}>
                <button className={`text-xs font-semibold rounded  ${index + 1 === page ? "bg-slate-900 text-white" : "bg-slate-100"}  px-3 py-2`} onClick={() => handleSelectPage(index + 1)}>{index + 1}</button>
              </li>
            ))
          }
          <li className={`${page === (todos.length / 10) && "hidden"}`}>
            <button className="text-xs font-semibold rounded bg-slate-100 px-3 py-2 hover:bg-slate-900 hover:text-white" onClick={() => handleSelectPage(page + 1)}>NEXT</button>
          </li>
        </ul>
      </div>
    </main>
  )
}
