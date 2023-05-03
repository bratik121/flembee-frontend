function Button({ label, onClick }: { label: string; onClick: () => void }) {
	return (
		<div
			className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 w-fit px-2 py-2 rounded-xl cursor-pointer "
			onClick={onClick}
		>
			{label}
		</div>
	);
}

export default Button;
