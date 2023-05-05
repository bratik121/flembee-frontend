function Button({
	label,
	onClick,
	submit,
}: {
	label: string;
	onClick: () => void;
	submit?: boolean;
}) {
	return (
		<button
			className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 w-fit px-2 py-2 rounded-xl cursor-pointer "
			onClick={onClick}
			type={submit ? "submit" : "button"}
		>
			{label}
		</button>
	);
}

export default Button;
