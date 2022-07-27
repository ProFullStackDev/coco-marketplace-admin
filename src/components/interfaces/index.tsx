/** context.tsx interface */
export interface StoreObject {
    usersInfo: any;
    auth: {
        isAuth: boolean;
        user: string;
        address: string;
        bio: string;
        signer: any;
        privateKey: string;
    };
    lang: string;
}
