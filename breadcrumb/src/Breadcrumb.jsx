import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar';

export default function Breadcrumb() {
    const location = useLocation();
    let crumbLink = "";
    const crumbPath = location.pathname
        .split("/")
        .filter((path) => path !== "")
        .map((crumb) => {
            crumbLink += `/${crumb}`;
            return crumbLink;
        });
    console.log(crumbLink);

    return (
        <div>
            <Navbar />

            <div className="breadcrumb"></div>

            <Outlet />
        </div>
    )
}
