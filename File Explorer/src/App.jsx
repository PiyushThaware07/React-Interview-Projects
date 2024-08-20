import "./App.css"
import React, { useState } from 'react'
import Folder from "./components/Folder"
import initialData from "./json/data.json";

export default function App() {
  const [record, setRecord] = useState(initialData);



  return (
    <main className="app_main p-20">
      <Folder data={record} setRecord={setRecord} />
    </main>
  )
}
