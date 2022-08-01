import {
    FaImages,
    FaCoins,
    FaUsers,
    FaRocketchat,
    FaCogs,
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
        title: "Profit Chart",
        to: "/profitchart",
        icon: FaRocketchat,
    },
    {
        title: "Setting",
        to: "/setting",
        icon: FaCogs,
    },
];
