import { APISchema } from "./http-common";

interface SignObject {
    name?: string;
    email: string;
    password: string;
}

// User Manage
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

// Export Functions
const Action = {
    Admin_create,
    Admin_login,
};

export default Action;
