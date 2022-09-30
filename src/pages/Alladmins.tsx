import { FaInbox } from "react-icons/fa";
import { useState, useLayoutEffect, useCallback } from "react";
import ToggleButton from "../components/ToggleButton";
import Action from "../services";
import { useGlobalContext } from "../context";
import { Toast } from "../utils/message";

export default function Alladmins() {
    const [state]: any = useGlobalContext();
    const [allAdmins, setAllAdmins] = useState([]);

    useLayoutEffect(() => {
        (async () => {
            try {
                const { code, result } = await Action.GetAllAdmin();

                if (code === 200) setAllAdmins(result);
                else setAllAdmins([]);
            } catch (err: any) {
                console.log(err.message);
            }
        })();
    }, []);

    const HandleChange = async (item: any) => {
        try {
            console.log(item);
            // const { code, result } = await Action.UpdateAllow({
            //     email: item.email,
            //     checked: !item.allow,
            // });

            // if (code === 200) {
            //     setAllAdmins(result);
            // }
        } catch (err: any) {
            Toast("Failed allow", "error");
        }
    };

    const HandleRemoveAdmin = async (item: any) => {
        try {
            console.log(item);
            // const { code, result } = await Action.RemoveAdmin({
            //     email: item.email,
            // });

            // if (code === 200 && result) {
            //     Toast("Successfully Removed", "success");
            // }
        } catch (err: any) {
            Toast("Failed remove admin", "error");
        }
    };

    return (
        <div className="alladmin">
            <div>
                <span></span>
                <button>Add admin</button>
            </div>
            <div className="admin_table">
                {allAdmins.length === 0 ? (
                    <div className="not_exist">
                        <FaInbox />
                        <h3>Not exist admin data</h3>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Allow</th>
                                <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allAdmins.map((item: any, index: number) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    {item.email !== state.auth.email && (
                                        <>
                                            <td>
                                                <ToggleButton
                                                    item={item}
                                                    changeFunc={HandleChange}
                                                />
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    onClick={() =>
                                                        HandleRemoveAdmin(item)
                                                    }
                                                    className="btnRemoveAdmin"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
