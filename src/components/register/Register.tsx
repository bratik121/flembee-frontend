import { useInput, useLoading, usePopUp } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Spinner from "../../elements/Spinner";
import { Register as RegisterType } from "../../types/types";
import { useRegisterMutation } from "../../redux/api/api";
import {
	validateText,
	validateUsuario,
	validateContraseña,
	validateEmail,
} from "../../utils/validations";

function Register() {
	const navigate = useNavigate();
	const userInput = useInput();
	const passwordInput = useInput();
	const emailInput = useInput();
	const firstNameInput = useInput();
	const lastNameInput = useInput();
	const registerLoading = useLoading();
	const registerPopUp = usePopUp("Usuario registrado con exito!");

	const handleLogin = () => {
		navigate("/");
	};

	const [register] = useRegisterMutation();

	const handleRegister = async (user: RegisterType) => {
		registerLoading.setLoading(true);
		const respuesta: any = await register(user);
		const { data, code, message } = respuesta.data;
		if (code === 200) {
			console.log(data);
			registerPopUp.execute();
			navigate("/");
		} else {
			console.log(message);
			registerLoading.setMessage(message);
		}
		registerLoading.setLoading(false);
	};

	const handleClick = () => {
		let flags = 0;
		flags += validateText(firstNameInput);
		flags += validateText(lastNameInput);
		flags += validateUsuario(userInput);
		flags += validateContraseña(passwordInput);
		flags += validateEmail(emailInput);
		if (flags === 0) {
			const user: RegisterType = {
				firstName: firstNameInput.ref.current?.value!,
				lastName: lastNameInput.ref.current?.value!,
				username: userInput.ref.current?.value!,
				password: passwordInput.ref.current?.value!,
				email: emailInput.ref.current?.value!,
			};
			firstNameInput.truncate();
			lastNameInput.truncate();
			userInput.truncate();
			passwordInput.truncate();
			emailInput.truncate();
			handleRegister(user);
		}
	};

	return (
		<div className="modal w-screen h-screen bg-[rgba(0,0,0,0.3)] grid items-center justify-items-center absolute top-0 right-0">
			<div className="login w-[300px]  md:w-[800px] bg-white shadow-2xl flex flex-col px-8 md:px-20 gap-6 py-10 rounded-lg">
				{registerLoading.loading ? (
					<Spinner />
				) : (
					<>
						{" "}
						<div className="flex flex-col gap-2">
							<h2 className="text-center text-2xl">Registrate</h2>
						</div>
						<div className="grid grid-cols-2 gap-8">
							{/* Usuario */}
							<div className="flex flex-col gap-2">
								<Input
									label="Usuario"
									name="usuario"
									error={userInput.error}
									usernameRef={userInput.ref}
								/>
							</div>
							{/* Contrasena */}
							<div className="flex flex-col gap-2">
								<Input
									label="Contraseña"
									name="password"
									error={passwordInput.error}
									usernameRef={passwordInput.ref}
									password={true}
								/>
							</div>
							{/* Nombre */}
							<div className="flex flex-col gap-2">
								<Input
									label="Nombre"
									name="nombre"
									error={firstNameInput.error}
									usernameRef={firstNameInput.ref}
								/>
							</div>
							{/* Apellido */}
							<div className="flex flex-col gap-2">
								<Input
									label="Apellido"
									name="apellido"
									error={lastNameInput.error}
									usernameRef={lastNameInput.ref}
								/>
							</div>
							{/* Email */}
							<div className="flex flex-col gap-2 col-span-2">
								<Input
									label="Email"
									name="email"
									error={emailInput.error}
									usernameRef={emailInput.ref}
								/>
							</div>
						</div>
						<div className="flex flex-col gap-2 items-center">
							<Button label="Registrarse" onClick={handleClick} />
							<span
								className="text-blue-500 hover:text-blue-300 transition duration-300 cursor-pointer"
								onClick={handleLogin}
							>
								Iniciar Sesion
							</span>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Register;
