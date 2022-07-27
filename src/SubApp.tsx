import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

/** ---------- Begin Pages ---------- */
// layouts pages
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/SIdebar";
/** ---------- End Pages ---------- */

export default function SubApp() {
    const [sidebarFlag, setSidebarFlag] = useState(false);

    useEffect(() => {
        const SetResponsiveness = () => {
            return window.innerWidth < 990
                ? setSidebarFlag(true)
                : setSidebarFlag(false);
        };

        SetResponsiveness();
        window.addEventListener("resize", () => SetResponsiveness());
    }, []);

    const ToggleSidebar = async () => {
        setSidebarFlag(!sidebarFlag);
    };

    return (
        <>
            <Sidebar sidebarFlag={sidebarFlag} />
            <div className={sidebarFlag ? "content open" : "content"}>
                <Header ToggleSidebar={ToggleSidebar} />
                <Outlet />
            </div>
        </>
    );
}
