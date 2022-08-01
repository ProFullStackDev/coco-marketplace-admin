import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarList } from "./SidebarList";
import { SidebarListObject } from "../interfaces";
import { useGlobalContext } from "../../context";

export default function Sidebar(props: any) {
    const { sidebarFlag } = props;
    const [state, {}]: any = useGlobalContext();

    return (
        <div className={sidebarFlag ? "sidebar" : "sidebar open"}>
            <nav className="navbar">
                <Link to="/">
                    <h3 className="text-primary text-center">Crypto-CoCo</h3>
                </Link>

                <div className="flex column navbar-nav w100">
                    {SidebarList.map(
                        (item: SidebarListObject, index: number) => (
                            <Link to={item.to} key={index}>
                                <div
                                    className={
                                        state.pageIndex === index + 1
                                            ? "flex justify nav-link active"
                                            : "flex justify nav-link"
                                    }
                                >
                                    <item.icon />
                                    <span>{item.title}</span>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </nav>
        </div>
    );
}
