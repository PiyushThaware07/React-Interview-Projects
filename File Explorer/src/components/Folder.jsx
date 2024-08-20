import { useState } from "react";
import { FcOpenedFolder, FcFile } from "react-icons/fc";
import initialData from "../json/data.json"

export default function Folder({ data, setRecord }) {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isDir: null,
        name: null
    });

    function handleButtonClicked(isDir, name) {
        setExpand(true);
        setShowInput({
            isVisible: true,
            isDir: isDir,
            name: name
        });
    }

    function handleInputFocus(event) {
        setShowInput({
            ...showInput,
            name: event.target.value
        });
    }

    function handleSubmit(event, branch) {
        event.preventDefault();

        const newItem = {
            id: new Date().getTime().toString(), // Ensure ID is unique and a string
            name: showInput.name,
            isDir: showInput.isDir,
            items: []
        };

        // Recursive function to find the branch and add new item
        function findAndUpdateBranch(branch, newItem) {
            if (branch.id === data.id) {
                branch.items.push(newItem);
                return true;
            }
            for (const item of branch.items) {
                if (findAndUpdateBranch(item, newItem)) {
                    return true;
                }
            }
            return false;
        }


        // Assume `initialData` is the root of your data structure
        findAndUpdateBranch(initialData, newItem);

        // Update the state in the parent component
        setRecord(initialData);

        // Reset input state
        setShowInput({
            isVisible: false,
            isDir: null,
            name: null
        });
    }

    return (
        <div className='max-w-md rounded-lg p-2'>
            <div className="flex flex-nowrap items-center justify-between">
                <button type="button" className="capitalize py-2 font-semibold text-md flex flex-nowrap items-center gap-2" onClick={() => setExpand(!expand)}>
                    {
                        data.isDir ?
                            <FcOpenedFolder className="text-2xl" />
                            :
                            <FcFile className="text-2xl" />
                    }
                    {data.name}
                </button>
                {
                    data.isDir &&
                    <div className="flex flex-nowrap items-center gap-2">
                        <button className="text-xs font-medium bg-emerald-500 text-white rounded px-2 py-1" onClick={() => handleButtonClicked(true, "folder")}>Folder +</button>
                        <button className="text-xs font-medium bg-slate-800 text-white rounded px-2 py-1" onClick={() => handleButtonClicked(false, "file")}>File +</button>
                    </div>
                }

            </div>

            {/* Input ------------------------------------ */}
            {
                (data.isDir && showInput.isVisible) &&
                <form onSubmit={(event) => handleSubmit(event, data)} className="my-2 flex flex-nowrap items-center gap-2 h-9 border-2 border-slate-800 rounded text-sm font-semibold">
                    <input type="text" placeholder={`Create new ${showInput.name}`} className="flex-1 h-full capitalize ps-2 focus:outline-none" autoFocus onChange={(event) => handleInputFocus(event)} />
                    <button type="submit" className="bg-slate-900 rounded-r-sm text-white h-full px-3 text-xs">Add</button>
                </form>
            }

            {/* Folder ------------------------------------ */}
            <div className={`ps-6 ${expand ? "" : "hidden"}`}>
                {
                    data.items.map((item, index) => (
                        <Folder key={index} data={item} setRecord={setRecord} />
                    ))
                }
            </div>
        </div>
    );
}
