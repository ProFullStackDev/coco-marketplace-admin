import { AttrCardObject } from "./interfaces";

export default function AttrItem(props: AttrCardObject) {
    const { type, per } = props;

    return (
        <div className="col-sm-6 col-md-6 col-lg-4 p1">
            <div className="nft_attr">
                <h5 className="m1 text-primary">
                    {type.length > 10 ? type.slice(0, 10) + "..." : type}
                </h5>
                <h6 className="m1">{per}</h6>
            </div>
        </div>
    );
}
