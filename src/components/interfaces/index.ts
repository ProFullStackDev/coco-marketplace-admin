import { IconType } from "react-icons";

/** Context interface */
export interface StoreObject {
    allNFT: [];
    collectionNFT: [];
    usersInfo: {};
    auth: {
        isAuth: boolean;
        name: string;
        email: string;
    };
    lang: string;
    pageIndex: number;
    signFlag: boolean;
}

/** Sidebarlist interface */
export interface SidebarListObject {
    title: string;
    to: string;
    icon: IconType;
}

/** CollectionCard interface */
export interface CollectioCardObject {
    logo: string;
    banner: string;
    title: string;
    author: string;
    desc: string;
    id: number;
    count: number;
}

/** ItemCard interface */
export interface ItemCardObject {
    image: string;
    title: string;
    desc: string;
}

export interface AttrCardObject {
    type: string;
    per: string;
}

/** Usertable interface */
export interface DataRow {
    image: string;
    name: string;
    email: string;
}

/** Auth Interface */
export interface AuthObject {
    name?: string;
    email: string;
    password: string;
    repassword?: string;
}
