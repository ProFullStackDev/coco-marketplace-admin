import { Link } from "react-router-dom";

export default function Login() {
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
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex middle justify-between">
                            <button className="btn-primary">Sign In</button>
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
