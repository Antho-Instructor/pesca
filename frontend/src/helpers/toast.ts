import { toast } from "react-toastify";

export const showToast = (
	type: "success" | "error" | "info",
	message: string
) => {
	if (type === "success") {
		toast.success(message);
	} else if (type === "error") {
		toast.error(message);
	} else {
		toast.info(message);
	}
};
