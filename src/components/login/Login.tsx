import { useNavigate } from "react-router-dom";
import { notEmpty } from "../../utils/validations";
import { Auth } from "../../types/types";
import Input from "../../elements/Input";
import { useInput } from "../../hooks/hooks";
import Button from "../../elements/Button";
import { BiUserCircle } from "react-icons/bi";
function Login() {
	const navigate = useNavigate();
	const userInput = useInput();
	const passwordInput = useInput();

	const validate = () => {
		let flags = 0;
		if (!notEmpty(userInput.ref!.current!.value)) {
			userInput.setError("El usuario no puede estar vacio");
			flags++;
		} else {
			userInput.setError("");
		}
		if (!notEmpty(passwordInput.ref!.current!.value)) {
			passwordInput.setError("La contraseña no puede estar vacia");
			flags++;
		} else {
			passwordInput.setError("");
		}
		if (flags === 0) {
			console.log("validado");
			const auth: Auth = {
				username: userInput.ref!.current!.value,
				password: passwordInput.ref!.current!.value,
			};
			console.log(auth);
			userInput.ref!.current!.value = "";
			passwordInput.ref!.current!.value = "";
		}
	};
	const handleClick = () => {
		validate();
		console.log("click");
	};
	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<div className="modal w-screen h-screen bg-[rgba(0,0,0,0.3)] grid items-center justify-items-center absolute top-0 right-0">
			<div className="login w-[300px]  md:w-[500px] bg-white shadow-2xl flex flex-col px-8 md:px-20 gap-6 py-10 rounded-lg">
				<div className="flex flex-col gap-2">
					<BiUserCircle className="text-7xl text-blue-500 mx-auto" />
					<h2 className="text-center text-2xl">Iniciar sesion</h2>
				</div>
				<div className="flex flex-col gap-2">
					<Input
						label="Usuario"
						name="usuario"
						error={userInput.error}
						usernameRef={userInput.ref}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<Input
						label="Contraseña"
						name="password"
						error={passwordInput.error}
						usernameRef={passwordInput.ref}
						password={true}
					/>
				</div>
				<div className="flex flex-col gap-2 items-center">
					<Button label="Iniciar sesion" onClick={handleClick} />
					<span
						className="text-blue-500 hover:text-blue-300 transition duration-300 cursor-pointer"
						onClick={handleRegister}
					>
						Registrarse
					</span>
				</div>
			</div>
		</div>
	);
}

export default Login;
