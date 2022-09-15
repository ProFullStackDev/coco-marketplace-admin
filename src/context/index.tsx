import {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useEffect,
} from "react";
import decode from "jwt-decode";
import { useQuery } from "@apollo/client";

import {
    GET_ALLNFTS,
    GET_USERSINFO,
    GET_COLLECTIONNFTS,
} from "../components/gql";

import addresses from "../contract/addresses.json";
import { translations } from "../components/language/translate";
import { StoreObject } from "../components/interfaces";

const INIT_STATE: StoreObject = {
    auth: {
        isAuth: false,
        name: "",
        email: "",
    },
    lang: "en",
    pageIndex: 0,
    allNFT: [],
    collectionNFT: [],
    usersInfo: {},
};

const App = createContext({});

export function useGlobalContext() {
    return useContext(App);
}

function reducer(state: any, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

const Currency = [
    {
        label: "ETH",
        value: addresses.WETH,
    },
    {
        label: "BUSD",
        value: addresses.TestToken,
    },
];

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        let savedLang: any = localStorage.getItem("lang");
        if (savedLang) SetLanguage({ newLang: savedLang });
        else SetLanguage({ newLang: "en" });
    }, []);

    /** Begin GraphQL Query */
    const {
        data: nftsData,
        loading: nftsLoading,
        error: nftsError,
    } = useQuery(GET_ALLNFTS, {
        pollInterval: 500,
    }); // Get All NFTs
    useEffect(() => {
        if (nftsLoading || nftsError) {
            return;
        }
        dispatch({
            type: "allNFT",
            payload: nftsData.getAllNFTs,
        });
    }, [nftsData, nftsLoading, nftsError]);

    const {
        data: nftsCollectionData,
        loading: nftsCollectionLoading,
        error: nftsCollectionError,
    } = useQuery(GET_COLLECTIONNFTS, {
        pollInterval: 500,
    }); // Get All NFT by Collections
    useEffect(() => {
        if (nftsCollectionLoading || nftsCollectionError) {
            return;
        }
        dispatch({
            type: "collectionNFT",
            payload: nftsCollectionData.getCollectionNFTs,
        });
    }, [nftsCollectionData, nftsCollectionLoading, nftsCollectionError]);

    const {
        data: usersData,
        loading: usersLoading,
        error: usersError,
    } = useQuery(GET_USERSINFO, {
        pollInterval: 500,
    }); // Get All Userinfos
    useEffect(() => {
        if (usersLoading || usersError) {
            return;
        }
        let bump = {};
        for (let i = 0; i < usersData.getUsersInfo.length; i++) {
            bump = {
                ...bump,
                [usersData.getUsersInfo[i].address]: usersData.getUsersInfo[i],
            };
        }
        dispatch({
            type: "usersInfo",
            payload: bump,
        });
    }, [usersData, usersLoading, usersError]);
    /** End GraphQL Query */

    // Multilang Setting
    const SetLanguage = (props: any) => {
        const { newLang } = props;
        dispatch({
            type: "lang",
            payload: newLang,
        });

        localStorage.setItem("lang", newLang);
    };

    const TranslateLang = (txt: string) => {
        return translations[state.lang][txt];
    };

    // Auth Mange
    const UpdateAuth = (token: string) => {
        let decodeToken: any = decode(token);

        dispatch({
            type: "auth",
            payload: {
                isAuth: true,
                name: decodeToken.name,
                email: decodeToken.email,
            },
        });

        localStorage.setItem("market-admin-token", token);
        return true;
    };

    // show method
    const GetCurrency = (tokenaddress: string = "") => {
        try {
            let currency = Currency.filter(
                (c: any) => c.value.toLowerCase() === tokenaddress.toLowerCase()
            );
            if (currency.length === 0) {
                return "";
            }
            return currency[0];
        } catch (err) {
            return {
                label: "Invalid Currency",
                value: "Unknown",
            };
        }
    };

    /* ------------ Context Value ------------- */
    return (
        <App.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch,
                        SetLanguage,
                        TranslateLang,
                        UpdateAuth,
                        GetCurrency,
                    },
                ],
                [
                    state,
                    dispatch,
                    SetLanguage,
                    TranslateLang,
                    UpdateAuth,
                    GetCurrency,
                ]
            )}
        >
            {children}
        </App.Provider>
    );
}
