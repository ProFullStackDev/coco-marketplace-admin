import { useState, useEffect } from "react";
import DataTable, {
    TableColumn,
    createTheme,
} from "react-data-table-component";
import { FaArrowDown } from "react-icons/fa";
import { DataRow } from "../components/interfaces";
import ExpandedComponent from "../components/UserDetail";
import CustomLoader from "../components/Spinner";

const columns: TableColumn<DataRow>[] = [
    {
        name: "Title",
        selector: (row: any) => row.title,
        sortable: true,
    },
    {
        name: "Director",
        selector: (row: any) => row.director,
        sortable: true,
    },
    {
        name: "Year",
        selector: (row: any) => row.year,
        sortable: true,
    },
];

const data = [
    {
        title: "Beetlejuice",
        year: "1988",
        director: "Tim Burton",
    },
    {
        title: "The Cotton Club",
        year: "1984",
        director: "Francis Ford Coppola",
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

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
