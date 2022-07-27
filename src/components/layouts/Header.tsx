import { useState } from "react";
import { FaBars } from "react-icons/fa";

import user from "../../assets/images/user.jpg";

export default function Header(props: any) {
    const { ToggleSidebar } = props;
    const [flag, setFlag] = useState(false);

    const ToggleActive = () => {
        setFlag(!flag);
    };

    return (
        <div className="header">
            <nav className="navbar">
                <button onClick={ToggleSidebar}>
                    <FaBars />
                </button>
                <span>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                    />
                </span>
                <div>
                    <button onClick={ToggleActive}>
                        <img src={user} alt="" />
                        <span>John Doe</span>
                    </button>

                    <div
                        style={
                            flag ? { display: "block" } : { display: "none" }
                        }
                    >
                        <a href="#">My Profile</a>
                        <a href="#">Settings</a>
                        <a href="#">Log Out</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
