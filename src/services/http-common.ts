export const APISchema = (param: any) => {
    let token = localStorage.getItem("market-admin-token");

    return {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(param),
    };
};
