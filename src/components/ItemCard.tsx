import item from "../assets/images/item.jpg";
import { ItemCardObject } from "./interfaces";

export default function ItemCard(props: ItemCardObject) {
    const { desc, image, title } = props;

    return (
        <div className="flex column bg-secondary p1 itemcard">
            <div>
                <img src={image} alt="" />
            </div>

            <div>
                <h5>
                    <b className="text-primary">Name:</b>{" "}
                    {title.length > 15 ? title.slice(0, 15) + "..." : title}
                </h5>
            </div>
        </div>
    );
}
