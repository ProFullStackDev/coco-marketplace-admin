import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Provider, { useGlobalContext } from "./context";

/** ---------- Begin Pages ---------- */
// normal pages
import Dashboard from "./pages/Dashboard";
import AllNFT from "./pages/Allnfts";

// auth pages
import Login from "./pages/auth/SignIn";
import Register from "./pages/auth/SignUp";
import NoPage from "./pages/NotFound";

// layout pages
import SubApp from "./SubApp";
/** ---------- End Pages ---------- */

/** Begin CSS Style */
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/index.scss";
/** End CSS Style */

interface Props {
    component: React.ComponentType;
    path?: string;
}

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const location = useLocation();

    const [state, {}]: any = useGlobalContext();

    // if (!state.auth.isAuth) {
    //     return <Navigate to="/login" replace state={{ from: location }} />;
    // }

    return <RouteComponent />;
};

export default function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Private Routes */}
                    <Route path="/" element={<SubApp />}>
                        <Route
                            index
                            element={<PrivateRoute component={Dashboard} />}
                        />
                        <Route
                            path="/allnft"
                            element={<PrivateRoute component={AllNFT} />}
                        />
                    </Route>

                    {/* Other Routes */}
                    <Route path="*" element={<NoPage />} />
                </Routes>
                <ToastContainer />
            </Router>
        </Provider>
    );
}
