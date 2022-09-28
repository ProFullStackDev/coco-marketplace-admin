import { APISchema } from "./http-common";

interface SignObject {
    name?: string;
    email: string;
    password: string;
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

// Export Functions
const Action = {
    Admin_check,
    Admin_create,
    Admin_login,
};

export default Action;
