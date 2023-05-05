import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { useLoginMutation } from "../../redux/api/api";
import { validateUsuario, validateContraseña } from "../../utils/validations";
import { Auth } from "../../types/types";
import { useInput, useLoading } from "../../hooks/hooks";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Spinner from "../../elements/Spinner";
function Login() {
	const navigate = useNavigate();
	const userInput = useInput();
	const passwordInput = useInput();
	const loginLoading = useLoading();
	const [userLogin] = useLoginMutation();

	const login = async (auth: Auth) => {
		loginLoading.setLoading(true);
		const respuesta: any = await userLogin(auth);
		const { data, code, message } = respuesta;
		if (code === 200) {
			console.log(data);
			navigate("/tasks");
			console.log("inicio sesion");
		} else {
			loginLoading.setMessage(message);
			console.log(userInput.ref.current?.value!);
			console.log(passwordInput.ref.current?.value!);
		}
		console.log(data);
		loginLoading.setLoading(false);
	};

	const handleClick = () => {
		let flags = 0;
		flags += validateUsuario(userInput);
		flags += validateContraseña(passwordInput);
		if (flags === 0) {
			const auth: Auth = {
				username: userInput.ref.current?.value!,
				password: passwordInput.ref.current?.value!,
			};
			userInput.truncate();
			passwordInput.truncate();
			login(auth);
		}
	};
	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<div className="modal w-screen h-screen bg-[rgba(0,0,0,0.3)] grid items-center justify-items-center absolute top-0 right-0">
			<div className="login w-[300px]  md:w-[500px] bg-white shadow-2xl flex flex-col px-8 md:px-20 gap-6 py-10 rounded-lg">
				{loginLoading.loading ? (
					<Spinner />
				) : (
					<>
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
					</>
				)}
			</div>
		</div>
	);
}

export default Login;
