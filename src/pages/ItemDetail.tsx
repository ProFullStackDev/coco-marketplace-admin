import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
} from "react-icons/fa";
import moment from "moment";
import { useGlobalContext } from "../context";
import AttrItem from "../components/AttrCard";
import Spinner from "../components/Spinner";

export default function ItemDetail() {
    const { collection, id } = useParams();
    const [state, { GetCurrency }]: any = useGlobalContext();
    const [correctCollection, setCorrectCollection] = useState(null);
    const [itemData, setItemData]: any = useState(null);
    const [timeFlag, setTimeFlag] = useState(true);
    const [expireTime, setExpireTime] = useState([]);

    useEffect(() => {
        for (let i = 0; i < state.collectionNFT.length; i++) {
            if (state.collectionNFT[i].address === collection) {
                setCorrectCollection(state.collectionNFT[i]);
                var itemData = state.collectionNFT[i].items.find(
                    (item: any) => item.tokenID === id
                );
                setItemData(itemData);
                break;
            }
        }
    }, [state.collectionNFT]);

    useEffect(() => {
        if (itemData !== null)
            if (itemData.marketdata.endTime !== "")
                setInterval(() => {
                    let endTime: any = moment(
                        Number(itemData.marketdata.endTime)
                    );
                    let nowTime: any = moment(new Date());
                    // test
                    if (endTime < nowTime) setTimeFlag(true);
                    else {
                        let ms: any = moment(endTime.diff(nowTime));
                        let bump: any = [];
                        bump.push(
                            Math.floor(moment.duration(ms).asHours() / 24)
                        );
                        bump.push(
                            Math.floor(moment.duration(ms).asHours()) % 24
                        );
                        bump.push(moment.utc(ms).format("mm"));
                        bump.push(moment.utc(ms).format("ss"));
                        setExpireTime(bump);
                        setTimeFlag(false);
                    }
                }, 1000);
    }, [itemData]);

    const HandleRemove = async () => {};

    return (
        <div className="row m0 itemdetail">
            {correctCollection === null ? (
                <Spinner />
            ) : (
                <>
                    <div className="col-sm-12 col-md-5 p3">
                        <div>
                            <img
                                src={itemData.metadata.image}
                                alt=""
                                className="item_image"
                            />
                            <div className="social-link">
                                {itemData?.metadata?.external_url1 !== "" && (
                                    <a href={itemData?.metadata?.external_url1}>
                                        <FaTwitterSquare />
                                    </a>
                                )}
                                {itemData.metadata.external_url2 !== "" && (
                                    <a href={itemData?.metadata?.external_url2}>
                                        <FaFacebookSquare />
                                    </a>
                                )}
                                {itemData.metadata.external_url3 !== "" && (
                                    <a href={itemData?.metadata?.external_url3}>
                                        <FaInstagramSquare />
                                    </a>
                                )}
                                {itemData.metadata.external_url4 !== "" && (
                                    <a href={itemData?.metadata?.external_url4}>
                                        <FaPinterestSquare />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-7 p2">
                        <div>
                            {itemData?.marketdata?.endTime === "" ? null : (
                                <>
                                    <span>
                                        <p className="text-primary">
                                            Sale ends{" "}
                                            {moment(
                                                Number(
                                                    itemData?.marketdata
                                                        ?.endTime
                                                )
                                            ).format("lll")}
                                        </p>
                                        {timeFlag ? null : (
                                            <div className="flex middle justify-between text-center">
                                                <span className="fill">
                                                    <h3>{expireTime[0]}</h3>
                                                    <p className="text-light">
                                                        day
                                                    </p>
                                                </span>
                                                <span className="fill">
                                                    <h3>{expireTime[1]}</h3>
                                                    <p className="text-light">
                                                        hour
                                                    </p>
                                                </span>
                                                <span className="fill">
                                                    <h3>{expireTime[2]}</h3>
                                                    <p className="text-light">
                                                        minute
                                                    </p>
                                                </span>
                                                <span className="fill">
                                                    <h3>{expireTime[3]}</h3>
                                                    <p className="text-light">
                                                        second
                                                    </p>
                                                </span>
                                            </div>
                                        )}
                                    </span>
                                </>
                            )}
                            <h3>{itemData.metadata.name || "unknown"}</h3>
                            <p style={{ wordBreak: "break-all" }}>
                                {itemData.metadata.description || ""}
                            </p>
                            <h3 className="text-primary">
                                {itemData.marketdata.price === ""
                                    ? "Not listed for sale"
                                    : itemData.marketdata.price +
                                      " " +
                                      GetCurrency(
                                          itemData.marketdata.acceptedToken
                                      ).label}
                            </h3>

                            <button onClick={HandleRemove}>Remove</button>
                            <div className="spacer-half"></div>
                            <hr />

                            <h5 className="mb1">Creator</h5>
                            <div className="item_author">
                                <div>
                                    <img
                                        src={
                                            state.usersInfo[itemData?.creator]
                                                ?.image === undefined
                                                ? state.collectionNFT[0]
                                                      .metadata.image
                                                : state.usersInfo[
                                                      itemData?.creator
                                                  ].image
                                        }
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <span className="text-light">
                                        {itemData.creator.slice(0, 10) +
                                            "..." +
                                            itemData.creator.slice(-10)}
                                    </span>
                                </div>
                            </div>

                            <h5 className="mb1">Owner</h5>
                            <div className="item_author">
                                <div>
                                    <img
                                        src={
                                            state.usersInfo[itemData?.owner]
                                                ?.image === undefined
                                                ? state.collectionNFT[0]
                                                      .metadata.image
                                                : state.usersInfo[
                                                      itemData?.owner
                                                  ].image
                                        }
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <span className="text-light">
                                        {itemData.owner.slice(0, 10) +
                                            "..." +
                                            itemData.owner.slice(-10)}
                                    </span>
                                </div>
                            </div>
                            <div className="spacer-single"></div>

                            <div className="row m0">
                                {itemData.metadata.attributes.map(
                                    (item: any, index: number) => (
                                        <AttrItem
                                            key={index}
                                            type={item.key}
                                            per={"+" + item.value}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
