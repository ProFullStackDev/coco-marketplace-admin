import {
    FaImages,
    FaCoins,
    FaUsers,
    FaRocketchat,
    FaCogs,
    FaTools,
} from "react-icons/fa";

export const SidebarList = [
    {
        title: "NFTs",
        to: "/allnft",
        icon: FaImages,
    },
    {
        title: "Collections",
        to: "/allcollection",
        icon: FaCoins,
    },
    {
        title: "Users",
        to: "/alluser",
        icon: FaUsers,
    },
    {
        title: "Admins",
        to: "/admin-manage",
        icon: FaTools,
    },
    // {
    //     title: "Profit Chart",
    //     to: "/profitchart",
    //     icon: FaRocketchat,
    // },
    // {
    //     title: "Setting",
    //     to: "/setting",
    //     icon: FaCogs,
    // },
];
