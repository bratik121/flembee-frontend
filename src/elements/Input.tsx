import { RefObject } from "react";

function Input({
	usernameRef,
	label,
	name,
	error,
	password,
}: {
	usernameRef: RefObject<HTMLInputElement>;
	label: string;
	name: string;
	error: string;
	password?: boolean;
}) {
	return (
		<>
			<label htmlFor="">{label}</label>
			<input
				type={`${password ? "password" : "text"}`}
				name={name}
				className="border border-blue-500 rounded-lg h-9 px-2"
				ref={usernameRef}
			/>
			<span className="text-red-400">{error}</span>
		</>
	);
}

export default Input;
