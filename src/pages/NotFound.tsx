import { BsFillExclamationTriangleFill } from "react-icons/bs";

export default function NotFound() {
    return (
        <div className="notfound">
            <div className="container-fluid">
                <div className="row middle center">
                    <div className="col-md-6 text-center p3">
                        <span className="text-primary f12 danger">
                            <BsFillExclamationTriangleFill />
                        </span>
                        <h1 className="bolder m0 p1">404</h1>
                        <h2 className="m0 p1">Page Not Found</h2>
                        <p className="mb3 text-light">
                            We’re sorry, the page you have looked for does not
                            exist in our website! Maybe go to our home page or
                            try to use a search?
                        </p>
                        <button className="btn-primary">Go Back To Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
