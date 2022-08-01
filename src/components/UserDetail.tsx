export default function ExpandedComponent({ data }: any) {
    return (
        <div className="userdetail">
            <span>
                <p className="text-primary">
                    <b>Name:</b>
                </p>{" "}
                <p>{data.name}</p>
            </span>
            <span>
                <p className="text-primary">
                    <b>Email:</b>
                </p>{" "}
                <p>{data.email}</p>
            </span>
            <span>
                <p className="text-primary">
                    <b>bio:</b>
                </p>{" "}
                <p>{data.bio}</p>
            </span>
            <span>
                <p className="text-primary">
                    <b>Address:</b>
                </p>{" "}
                <p>{data.address}</p>
            </span>
            <span>
                <p className="text-primary">
                    <b>PrivateKey:</b>
                </p>{" "}
                <p>{data.privateKey}</p>
            </span>
        </div>
    );
}
