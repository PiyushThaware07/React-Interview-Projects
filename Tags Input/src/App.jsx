import "./App.css";
import React from 'react'
import Method01 from "./components/Method01";
import Method02 from "./components/Method02";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Method01 />
      <Method02 />
    </main>
  )
}
