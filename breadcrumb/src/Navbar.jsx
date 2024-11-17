import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul className='text-sm font-medium flex flex-nowrap gap-3'>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li>
                    <Link to="/blogs">blogs</Link>
                    <ul className='ps-5'>
                        <li>
                            <Link to="/blogs/blog01">blog 01</Link>
                        </li>
                        <li>
                            <Link to="/blogs/blog02">blog 02</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
