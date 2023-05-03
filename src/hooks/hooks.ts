import { useRef, useState } from "react";

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
