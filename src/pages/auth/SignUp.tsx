import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthObject } from "../../components/interfaces";
import Action from "../../services";
import { Toast } from "../../utils/message";

export default function Register() {
    const navigate = useNavigate();
    const [authData, setAuthData] = useState<AuthObject>({
        name: "",
        email: "",
        password: "",
        repassword: "",
    });

    const HandleSignUp = async () => {
        try {
            if (authData.name?.trim() === "") {
                Toast("Fill out name field", "warn");
                return;
            }
            if (authData.email.trim() === "") {
                Toast("Fill out email field", "warn");
                return;
            }
            if (authData.password.trim() === "") {
                Toast("Fill out password field", "warn");
                return;
            }
            if (authData.password.trim() !== authData.repassword?.trim()) {
                Toast("password is not same.", "warn");
                return;
            }

            let result: any = await Action.Admin_create({
                name: authData.name,
                email: authData.email,
                password: authData.password,
            });

            switch (result.code) {
                case 200:
                    Toast("Successfully SignUp", "success");
                    break;
                case 303:
                    Toast("Email already exist", "warn");
                    break;
                case 500:
                    Toast("Server Error", "error");
                    break;
                default:
                    break;
            }
            navigate("/login");
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
                            <h3 className="text-primary">Sign Up</h3>
                        </div>
                        <div className="flex column">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={authData.name}
                                onChange={(e: any) =>
                                    setAuthData({
                                        ...authData,
                                        name: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={authData.email}
                                onChange={(e: any) =>
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
                                onChange={(e: any) =>
                                    setAuthData({
                                        ...authData,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password"
                                value={authData.repassword}
                                onChange={(e: any) =>
                                    setAuthData({
                                        ...authData,
                                        repassword: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex middle justify-between">
                            <button
                                className="btn-primary"
                                onClick={HandleSignUp}
                            >
                                Sign Up
                            </button>
                        </div>
                        <p className="text-center">
                            Already have an Account?{" "}
                            <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
