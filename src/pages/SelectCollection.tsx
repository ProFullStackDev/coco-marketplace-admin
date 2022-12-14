import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import ItemCard from "../components/ItemCard";

export default function SelectCollection() {
    const { collection } = useParams();
    const navigate = useNavigate();
    const [state, {}]: any = useGlobalContext();
    const [currentItem, setCurrentItem]: any = useState(null);

    useEffect(() => {
        state.collectionNFT.map((item: any) => {
            if (item.address === collection) {
                setCurrentItem(item);
                return;
            }
        });
    }, [collection]);

    const Handle = (collection: string, address: string) => {
        navigate(`/item/${collection}/${address}`);
    };

    return (
        <div className="p2">
            <div className="row m0">
                {currentItem !== null
                    ? currentItem.items.map((item: any, index: number) => (
                          <div
                              className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p1"
                              key={index}
                          >
                              <div
                                  onClick={() =>
                                      Handle(
                                          item.collectionAddress,
                                          item.tokenID
                                      )
                                  }
                              >
                                  <ItemCard
                                      image={item.metadata.image}
                                      desc=""
                                      title={item.metadata.name}
                                  />
                              </div>
                          </div>
                      ))
                    : "Loading..."}
            </div>
        </div>
    );
}
