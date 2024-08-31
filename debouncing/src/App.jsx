import React, { useEffect, useState } from 'react'

export default function App() {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchSuggestions() {
    try {
      if (input.trim() === "") {
        setSuggestion(null);
        return;
      }
      setLoading(true);
      const request = await fetch(`https://dummyjson.com/users/search?q=${input}`);
      const response = await request.json();
      setSuggestion(response.users);
    }
    catch (error) {
      console.error(error.message);
      setSuggestion(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [input])

  return (
    <main className='p-10 max-w-lg mx-auto'>
      <h1 className='text-sm font-medium my-3'><span className='text-xl font-semibold'>Debouncing</span> ~ Added a debouncing mechanism to reduce the number of API calls when the user is typing.</h1>
      <input type="text"
        placeholder='search user'
        onChange={(e) => setInput(e.target.value)}
        className='text-sm font-medium border-2 border-slate-900 rounded p-2 capitalize w-full' />
      {loading && <p>Loading...</p>}
      {
        suggestion !== null && !loading
        &&
        <ul>
          {suggestion.map((item, index) => (
            <li key={index}>{item?.firstName || ""} {item?.lastName || ""}</li>
          ))}
        </ul>
      }
    </main>
  )
}
