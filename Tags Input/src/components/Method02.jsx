
import React, { useState, useRef } from 'react';
import { IoClose } from "react-icons/io5";

export default function Method02() {
    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);


    function handleSelect(ele) {
        const text = `${ele.firstName} ${ele.lastName}`;
        setTags([...tags, text]);
        setSuggestions([]);
        inputRef.current.value = "";
    }


    async function handleChange(e) {
        if (e.target.value.trim() == "") {
            setSuggestions([])
            return;
        }
        else if (e.key === "Enter") {
            const value = e.target.value;
            setTags([...tags, value]);
            e.target.value = "";
        }
        const request = await fetch(`https://dummyjson.com/users/search?q=${e.target.value}`);
        const response = await request.json();
        setSuggestions(response.users);
    }

    function handleRemove(indexValue) {
        setTags(tags.filter((_, index) => index !== indexValue));
    }

    return (
        <>
        <h1 className='text-xl font-semibold capitalize p-10 text-center'>Tags With suggestion on input change</h1>
            <div className="h-screen w-screen flex flex-nowrap items-center justify-center">
                <div className="border-2 border-slate-900 p-5 rounded w-[400px]">
                    <ul className="mb-7 flex flex-wrap items-center gap-3">
                        {tags.map((tag, index) => (
                            <li key={index} className="inline-flex flex-nowrap items-center gap-1 bg-emerald-400 px-2 py-1 rounded-full ring-[1.5px] ring-slate-900">
                                <h1 className="text-xs font-semibold capitalize">{tag}</h1>
                                <IoClose className="cursor-pointer" onClick={() => handleRemove(index)} />
                            </li>
                        ))}
                    </ul>
                    <input type="text" placeholder="Add tag" className="bg-gray-100 p-2 rounded text-sm font-semibold border-2 border-slate-900 focus:outline-none w-full capitalize" onKeyDown={handleChange} ref={inputRef} />

                    {
                        (suggestions && suggestions.length > 0)
                        &&
                        <div className="mt-5 px-4">
                            <h1 className='text-xs font-semibold capitalize mb-2'>Suggestions</h1>
                            <ul className=' bg-gray-50 p-2 rounded border'>
                                {
                                    suggestions.map((item, index) => (
                                        <li key={index} className='text-xs font-semibold capitalize p-2 cursor-pointer hover:bg-gray-200 rounded' onClick={() => handleSelect(item)}>
                                            {item.firstName} {item.lastName}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>

    )
}
