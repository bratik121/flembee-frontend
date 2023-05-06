import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setOpen, setClose } from "../redux/features/popUpSlice";
import { PopUp } from "../types/types";

export const useInput = () => {
	const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
	const [error, setError] = useState("");
	const truncate = () => {
		ref.current!.value = "";
	};
	return {
		ref,
		error,
		setError,
		truncate,
	};
};

export const useLoading = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	return {
		loading,
		setLoading,
		message,
		setMessage,
	};
};

export const usePopUp = (message: string) => {
	const dispatch = useDispatch();
	const popUp: PopUp = {
		open: true,
		message: message,
	};
	const execute = () => {
		dispatch(setOpen(popUp));
		setTimeout(() => {
			dispatch(setClose());
		}, 2000);
	};
	return {
		execute,
	};
};
