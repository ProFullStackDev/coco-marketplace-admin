import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useGlobalContext } from "../context";

export default function AllNFT() {
    const navigate = useNavigate();
    const [state, {}]: any = useGlobalContext();
    const [filter, setFilter] = useState(null);

    const Handle = (collection: string, address: string) => {
        navigate(`/item/${collection}/${address}`);
    };

    const NFTs = useMemo(() => {
        if (!filter) return state.allNFT;
        else {
            return state.allNFT.filter(
                (item: any) =>
                    item.owner.toLowerCase() ==
                    state.addresses.Marketplace.toLowerCase()
            );
        }
    }, [state.allNFT, filter]);

    return (
        <div className="p2">
            <div className="row m0">
                {NFTs.map((item: any, index: number) => (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p1"
                        key={index}
                    >
                        <div
                            onClick={() =>
                                Handle(item.collectionAddress, item.tokenID)
                            }
                        >
                            <ItemCard
                                image={item.metadata.image}
                                desc={item.metadata.description}
                                title={item.metadata.name}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
