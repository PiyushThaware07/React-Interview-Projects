import "./App.css"
import React from 'react'
import Method1 from './components/Method1';
import Method2 from "./components/Method2";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Method1 />
      <Method2/>
    </div>
  )
}
