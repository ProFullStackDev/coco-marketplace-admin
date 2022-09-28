import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Provider, { useGlobalContext } from "./context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

/** ---------- Begin Pages ---------- */
// normal pages
import Dashboard from "./pages/Dashboard";
import AllNFT from "./pages/Allnfts";
import AllCollection from "./pages/Allcollection";
import SelectCollection from "./pages/SelectCollection";
import AllUser from "./pages/Allusers";
import ProfitChart from "./pages/Profitchat";
import Setting from "./pages/Setting";

import ItemDetail from "./pages/ItemDetail";

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
    const [state, { dispatch }]: any = useGlobalContext();

    useEffect(() => {
        if (location.pathname === "/")
            dispatch({ type: "pageIndex", payload: 0 });
        if (location.pathname.includes("/allnft"))
            dispatch({ type: "pageIndex", payload: 1 });
        if (location.pathname.includes("/allcollection"))
            dispatch({ type: "pageIndex", payload: 2 });
        if (location.pathname.includes("/alluser"))
            dispatch({ type: "pageIndex", payload: 3 });
        if (location.pathname.includes("/profitchart"))
            dispatch({ type: "pageIndex", payload: 4 });
        if (location.pathname.includes("/setting"))
            dispatch({ type: "pageIndex", payload: 5 });
    }, [location.pathname]);

    if (!state.auth.isAuth) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <RouteComponent />;
};

const FilterRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const [state]: any = useGlobalContext();

    if (state.signFlag) {
        return <Navigate to="/login" replace />;
    }

    return <RouteComponent />;
};

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPQLENDPOINT,
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Provider>
                <Router>
                    <Routes>
                        {/* Auth Routes */}
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/register"
                            element={<FilterRoute component={Register} />}
                        />

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
                            <Route
                                path="/allcollection"
                                element={
                                    <PrivateRoute component={AllCollection} />
                                }
                            />
                            <Route
                                path="/allcollection/:collection"
                                element={
                                    <PrivateRoute
                                        component={SelectCollection}
                                    />
                                }
                            />
                            <Route
                                path="/item/:collection/:id"
                                element={
                                    <PrivateRoute component={ItemDetail} />
                                }
                            />
                            <Route
                                path="/alluser"
                                element={<PrivateRoute component={AllUser} />}
                            />
                            <Route
                                path="/profitchart"
                                element={
                                    <PrivateRoute component={ProfitChart} />
                                }
                            />
                            <Route
                                path="/setting"
                                element={<PrivateRoute component={Setting} />}
                            />
                        </Route>

                        {/* Other Routes */}
                        <Route path="*" element={<NoPage />} />
                    </Routes>

                    <ToastContainer />
                </Router>
            </Provider>
        </ApolloProvider>
    );
}
