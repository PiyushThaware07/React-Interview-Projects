import React, { useState } from 'react';

export default function DragDrop2() {
    const [columns, setColumns] = useState({
        column1: [
            { id: 1, text: "Item 01" },
            { id: 2, text: "Item 02" },
            { id: 3, text: "Item 03" },
            { id: 4, text: "Item 04" },
            { id: 5, text: "Item 05" },
            { id: 6, text: "Item 06" },
            { id: 7, text: "Item 07" },
        ],
        column2: [
            { id: 8, text: "Item 08" },
            { id: 9, text: "Item 09" },
            { id: 10, text: "Item 10" }
        ]
    });

    function handleDragStart(event, item, fromColumn) {
        // storing data as strings
        event.dataTransfer.setData('item', JSON.stringify(item));
        event.dataTransfer.setData('fromColumn', fromColumn);
    }

    function handleDropColumn(event, toColumn) {
        const item = JSON.parse(event.dataTransfer.getData("item"));
        const fromColumn = event.dataTransfer.getData("fromColumn");

        if (fromColumn === toColumn) {
            return;
        }
        else {
            setColumns((prev) => {
                const fromData = prev[fromColumn].filter((older) => older.id !== item.id);
                const toData = [...prev[toColumn], item];
                return {
                    ...prev,
                    [fromColumn]: fromData,
                    [toColumn]: toData
                };
            });
        }

    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    return (
        <div className='flex flex-nowrap items-start gap-5 justify-center'>
            {Object.keys(columns).map((column) => (
                <ul
                    key={column}
                    className='border-2 border-slate-900 p-2'
                    onDrop={(event) => handleDropColumn(event, column)}
                    onDragOver={handleDragOver}
                >
                    {columns[column].map((item) => (
                        <li
                            key={item.id}
                            className='text-sm font-semibold capitalize bg-emerald-200 rounded px-7 py-3 m-2 cursor-pointer select-none'
                            draggable
                            onDragStart={(event) => handleDragStart(event, item, column)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
