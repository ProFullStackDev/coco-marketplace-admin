import { useState, useEffect } from "react";
import DataTable, {
    TableColumn,
    createTheme,
} from "react-data-table-component";
import { FaArrowDown } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { DataRow } from "../components/interfaces";
import ExpandedComponent from "../components/UserDetail";
import CustomLoader from "../components/Spinner";

const columns: TableColumn<DataRow>[] = [
    {
        name: "Avatar",
        selector: (row): any => (
            <img src={row.image} alt="" className="userLogo" />
        ),
    },
    {
        name: "Name",
        selector: (row): any => row.name,
        sortable: true,
        style: {
            width: "0px",
        },
    },
    {
        name: "Email",
        selector: (row): any => row.email,
        sortable: true,
    },
];

createTheme(
    "solarized",
    {
        text: {
            primary: "var(--light)",
        },
        background: {
            default: "var(--secondary)",
        },
        button: {
            default: "var(--light)",
            hover: "rgba(0,0,0,.08)",
            focus: "rgba(255,255,255,.12)",
            disabled: "rgba(255, 255, 255, .34)",
        },
    },
    "dark"
);

const customStyles = {
    rows: {
        style: {
            padding: "15px",
            fontSize: "16px",
            fontWeight: 700,
        },
    },
    headCells: {
        style: {
            padding: "30px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            minHeight: "50px",
        },
    },
    pagination: {
        style: {
            fontSize: "14px",
            fontWeight: 600,
        },
    },
};

export default function AllUser() {
    const [state, {}]: any = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [data, setData]: any = useState([]);

    useEffect(() => {
        setLoading(true);

        let bump: any = [];
        Object.keys(state.usersInfo).map((item) => {
            bump.push(state.usersInfo[item]);
        });
        setData(bump);

        setLoading(false);
    }, [state.usersInfo]);

    return (
        <div className="alluser">
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                fixedHeader
                sortIcon={<FaArrowDown />}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                progressPending={loading}
                theme="solarized"
                pagination
                progressComponent={<CustomLoader />}
            />
        </div>
    );
}
