import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthObject } from "../../components/interfaces";
import Action from "../../services";
import { Toast } from "../../utils/message";
import { useGlobalContext } from "../../context";

export default function Login() {
    const navigate = useNavigate();
    // const location = useLocation();
    const [, { UpdateAuth }]: any = useGlobalContext();
    const [authData, setAuthData] = useState<AuthObject>({
        email: "",
        password: "",
    });

    const HandleSignIn = async () => {
        try {
            if (authData.email.trim() === "") {
                Toast("Fill out email field", "warn");
                return;
            }
            if (authData.password.trim() === "") {
                Toast("Fill out password field", "warn");
                return;
            }

            let result: any = await Action.Admin_login({
                email: authData.email,
                password: authData.password,
            });

            if (result.token) {
                let request = await UpdateAuth(result.token);
                if (request) navigate("/");
            }

            switch (result.code) {
                case 200:
                    Toast("Successfully SignUp", "success");
                    break;
                case 404:
                    Toast("Email or Password are wrong", "warn");
                    break;
                case 500:
                    Toast("Server Error", "error");
                    break;
                default:
                    break;
            }
        } catch (err) {
            Toast("Network Error", "error");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row middle center" style={{ minHeight: "100vh" }}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="sign">
                        <div className="flex center middle">
                            <h3 className="text-primary">Sign In</h3>
                        </div>
                        <div className="flex column">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={authData.email}
                                onChange={(e) =>
                                    setAuthData({
                                        ...authData,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={authData.password}
                                onChange={(e) =>
                                    setAuthData({
                                        ...authData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex middle justify-between">
                            <button
                                className="btn-primary"
                                onClick={HandleSignIn}
                            >
                                Sign In
                            </button>
                        </div>
                        <p className="text-center">
                            Don't have an Account?{" "}
                            <Link to="/register">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
