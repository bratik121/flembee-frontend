import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setOpen, setClose } from "../redux/features/popUpSlice";
import { PopUp } from "../types/types";

export const useInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const [error, setError] = useState("");
	return {
		ref,
		error,
		setError,
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
