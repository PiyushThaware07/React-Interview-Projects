import React, { useState } from 'react'


const initialData = [
    { id: 1, text: "Complete React JS project" },
    { id: 2, text: "Study Data Structures and Algorithms" },
    { id: 3, text: "Review pull requests on GitHub" },
    { id: 4, text: "Write blog post on JavaScript closures" },
    { id: 5, text: "Prepare for the upcoming interview" },
    { id: 6, text: "Update LinkedIn profile" },

]



export default function DragDrop3() {
    const [list1, setList1] = useState(initialData);
    const [list2, setList2] = useState([{ id: 7, text: "Attend the team meeting at 3 PM" },]);


    function handleDragElement(event, item, fromList) {
        event.dataTransfer.setData("item", JSON.stringify(item));
        event.dataTransfer.setData("fromList", fromList);
    }

    function handleDropElement(event, toList) {
        event.preventDefault();
        const item = JSON.parse(event.dataTransfer.getData("item"));
        const fromList = event.dataTransfer.getData("fromList");
        console.log(item, fromList, toList);
        // drop to same list
        if (fromList === toList) {
            return
        }
        if (fromList === "list1") {
            // hide or remove item from current list 
            setList1(prevList => prevList.filter(listItem => listItem.id !== item.id));
            // set data to new list
            setList2(prevList => [...prevList, item]);
        } else if (fromList === "list2") {
            setList2(prevList => prevList.filter(listItem => listItem.id !== item.id));
            setList1(prevList => [...prevList, item]);
        }
    }

    function handleAllowDrag(event) {
        event.preventDefault();
    }


    return (
        <div className='grid grid-cols-2 gap-6'>

            <section className='list1 border-2 border-slate-900' onDrop={(e) => handleDropElement(e, "list1")} onDragOver={(e) => handleAllowDrag(e)}>
                <h1 className='bg-slate-900 text-white text-center p-2 text-md font-semibold'>List 01</h1>
                <ul className='p-2'>
                    {
                        list1.map((item) => (
                            <li key={item.id}
                                className='text-xs font-medium bg-slate-200 rounded hover:bg-slate-300 select-none cursor-pointer p-2 m-2'
                                draggable
                                onDragStart={(e) => handleDragElement(e, item, "list1")}
                            >
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            </section>


            <section className='list1 border-2 border-slate-900' onDrop={(e) => handleDropElement(e, "list2")} onDragOver={(e) => handleAllowDrag(e)}>
                <h1 className='bg-slate-900 text-white text-center p-2 text-md font-semibold'>List 02</h1>
                <ul className='p-2'>
                    {
                        list2.map((item) => (
                            <li key={item.id}
                                className='text-xs font-medium bg-slate-200 rounded hover:bg-slate-300 select-none cursor-pointer p-2 m-2'
                                draggable
                                onDragStart={(e) => handleDragElement(e, item, "list2")}
                            >
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            </section>


        </div>
    )
}
