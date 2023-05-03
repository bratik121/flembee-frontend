import Input from "../../elements/Input";
import { useInput } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";
function Register() {
	const navigate = useNavigate();
	const userInput = useInput();
	const passwordInput = useInput();
	const emailInput = useInput();
	const firstNameInput = useInput();
	const lastNameInput = useInput();

	const handleLogin = () => {
		navigate("/");
	};

	const handleClick = () => {};

	return (
		<div className="modal w-screen h-screen bg-[rgba(0,0,0,0.3)] grid items-center justify-items-center absolute top-0 right-0">
			<div className="login w-[300px]  md:w-[800px] bg-white shadow-2xl flex flex-col px-8 md:px-20 gap-6 py-10 rounded-lg">
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
			</div>
		</div>
	);
}

export default Register;
