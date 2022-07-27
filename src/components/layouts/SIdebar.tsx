import {
    FaImages,
    FaCoins,
    FaUsers,
    FaRocketchat,
    FaCogs,
} from "react-icons/fa";

export default function Sidebar(props: any) {
    const { sidebarFlag } = props;

    return (
        <div className={sidebarFlag ? "sidebar" : "sidebar open"}>
            <nav className="navbar">
                <a href="#" className="text-center">
                    <h3 className="text-primary">Crypto-CoCo</h3>
                </a>
                <div className="flex column navbar-nav w100">
                    <a href="#" className="flex justify nav-link active">
                        <FaImages />
                        <span>All NFTs</span>
                    </a>
                    <a href="#" className="flex justify nav-link">
                        <FaCoins />
                        <span>Collections</span>
                    </a>
                    <a href="#" className="flex justify nav-link">
                        <FaUsers />
                        <span>Users</span>
                    </a>
                    <a href="#" className="flex justify nav-link">
                        <FaRocketchat />
                        <span>Profit Chat</span>
                    </a>
                    <a href="#" className="flex justify nav-link">
                        <FaCogs />
                        <span>Setting</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}
