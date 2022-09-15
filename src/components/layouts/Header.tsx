import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";

import user from "../../assets/images/user.jpg";

export default function Header(props: any) {
    const { ToggleSidebar } = props;
    const [state, { dispatch }]: any = useGlobalContext();
    const [flag, setFlag] = useState(false);

    const ToggleActive = () => {
        setFlag(!flag);
    };

    const Logout = async () => {
        dispatch({
            type: "auth",
            payload: {
                isAuth: false,
            },
        });
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
                        <span>{state.auth.name}</span>
                    </button>

                    <div
                        style={
                            flag ? { display: "block" } : { display: "none" }
                        }
                    >
                        <button>My Profile</button>
                        <button>Settings</button>
                        <button onClick={Logout}>Log Out</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
