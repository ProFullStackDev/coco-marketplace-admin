import { APISchema } from "./http-common";

interface SignObject {
    name?: string;
    email: string;
    password: string;
}

interface RemoveNFTObject {
    collectionAddress: string;
    nftAddress: string;
}

interface RemoveUserObject {
    address: string;
}

interface AllowObject {
    email: string;
    checked: boolean;
}

interface RemoveAdminObject {
    email: string;
}

// Admin Manage
const Admin_create = async (data: SignObject) => {
    let content: any = APISchema(data);

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/admin-create",
        content
    );

    return { code: request.status };
};
const Admin_login = async (data: SignObject) => {
    let content: any = APISchema(data);

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/admin-login",
        content
    );
    let token = await request.text();

    return { code: request.status, token: token };
};
const Admin_check = async () => {
    let content: any = APISchema({});

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/admin-check",
        content
    );

    const result = await request.json();

    return { code: request.status, result: result.result };
};
const Remove_NFT = async (data: RemoveNFTObject) => {
    let content: any = APISchema(data);

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/admin-nft-delete",
        content
    );

    const result = await request.json();

    return { code: request.status, result: result.success };
};
const Remove_User = async (data: RemoveUserObject) => {
    let content: any = APISchema(data);

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/admin-user-delete",
        content
    );

    const result = await request.json();

    return { code: request.status, result: result.success };
};
const GetAllAdmin = async () => {
    let content: any = APISchema({});

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/get-all-admin",
        content
    );

    const result = await request.json();

    return { code: request.status, result: result.data };
};
const UpdateAllow = async (data: AllowObject) => {
    let content: any = APISchema(data);

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/change-allow",
        content
    );

    const result = await request.json();

    return { code: request.status, result: result.data };
};
const RemoveAdmin = async (data: RemoveAdminObject) => {
    let content: any = APISchema(data);

    let request: any = await window.fetch(
        process.env.REACT_APP_BACKENDURL + "/api/remove-admin",
        content
    );

    const result = await request.json();

    return { code: request.status, result: result.success };
};

// Export Functions
const Action = {
    Admin_check,
    Admin_create,
    Admin_login,
    Remove_NFT,
    Remove_User,
    GetAllAdmin,
    UpdateAllow,
    RemoveAdmin,
};

export default Action;
