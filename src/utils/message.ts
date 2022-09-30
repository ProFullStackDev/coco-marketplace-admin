import { toast } from "react-toastify";
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";

export const Toast = (message: string, status: string) => {
    switch (status) {
        case "success":
            return toast.success(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        case "error":
            return toast.error(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        case "warn":
            return toast.warning(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        default:
            return toast.warning(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
    }
};

export const ConfirmToast = async (callbackFunc: any, param: any) => {
    swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        buttons: [true, true],
        dangerMode: true,
    }).then(async (willDelete) => {
        if (willDelete) {
            await callbackFunc(param);
        } else {
            // swal("Your imaginary file is safe!");
        }
    });
};
