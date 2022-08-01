import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import CollectionCard from "../components/CollectionCard";

export default function AllCollection() {
    const navigate = useNavigate();
    const [state, {}]: any = useGlobalContext();

    const Handle = (collection: string) => {
        navigate(`/allcollection/${collection}`);
    };

    return (
        <div className="p2">
            <div className="row middle center text-center m0">
                {state.collectionNFT.map((item: any, index: number) => (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p1"
                        key={index}
                    >
                        <div onClick={() => Handle(item.address)}>
                            <CollectionCard
                                logo={item.metadata.coverImage}
                                banner={item.metadata.image}
                                author={
                                    item.metadata.fee_recipent.slice(0, 5) +
                                    "..." +
                                    item.metadata.fee_recipent.slice(-4)
                                }
                                title={item.metadata.name}
                                desc={item.metadata.description}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
