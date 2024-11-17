import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

export default function App() {
  return (
    <Routes>
      <Route path='' element={<Breadcrumb />} >
        <Route index element={<h1>Home Page</h1>} />
        <Route path='/about' element={<h1>About Page</h1>} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />
        <Route path='/blogs/:blogId?' element={<h1>Blogs Page</h1>} />
      </Route>
    </Routes>
  )
}
