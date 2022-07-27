import {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useEffect,
} from "react";

import { translations } from "../components/language/translate";
import { StoreObject } from "../components/interfaces";

const INIT_STATE: StoreObject = {
    usersInfo: {},
    auth: {
        isAuth: false,
        user: "",
        address: "",
        bio: "",
        signer: {},
        privateKey: "",
    },
    lang: "en",
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

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        let savedLang = localStorage.getItem("lang");
        if (savedLang) setLanguage({ newLang: savedLang });
        else setLanguage({ newLang: "en" });
    }, []);

    // set language
    const setLanguage = (props: any) => {
        const { newLang } = props;
        dispatch({
            type: "lang",
            payload: newLang,
        });

        localStorage.setItem("lang", newLang);
    };

    const translateLang = (txt: string) => {
        return translations[state.lang][txt];
    };

    /* ------------ Context Value ------------- */

    return (
        <App.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch,
                        setLanguage,
                        translateLang,
                    },
                ],
                [state, dispatch, setLanguage, translateLang]
            )}
        >
            {children}
        </App.Provider>
    );
}
