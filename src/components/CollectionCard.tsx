import { CollectioCardObject } from "./interfaces";

export default function CollectionCard(props: CollectioCardObject) {
    const { logo, banner, author, desc, title } = props;

    return (
        <div className="flex column bg-secondary collectioncard">
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <span>
                    <img src={banner} alt="" />
                </span>
            </div>

            <div>
                <h5 className="mb1">
                    {title.length > 15 ? title.slice(0, 15) + "..." : title}
                </h5>
                <h6 className="mb2 mt2">
                    <span className="text-light">by</span>{" "}
                    <b className="text-primary">{author}</b>
                </h6>
                <p>
                    {desc === ""
                        ? "No description"
                        : desc.length > 30
                        ? desc.slice(0, 20) + "..."
                        : desc}
                </p>
            </div>
        </div>
    );
}
