import { AiFillCheckCircle } from "react-icons/ai";
import { motion as m } from "framer-motion";

function PopUp({ message }: { message: string }) {
	return (
		<m.div
			className="popUp flex items-center fixed px-6 py-2 bg-blanco gap-4 rounded-xl"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -80 }}
		>
			<AiFillCheckCircle className="popUp__icon text-3xl text-blue-500" />
			<p className="popUp__message text-lg">{message}</p>
		</m.div>
	);
}

export default PopUp;
