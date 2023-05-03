export const notEmpty = (text: string): boolean => text != "";
export const validEmail = (email: string) =>
	!email.match(
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);
export const validText = (text: string) => !text.match(/^([A-Za-z]+[\s-]*)+$/i);

export const validateUsuario = (usuario: any): number => {
	if (notEmpty(usuario.ref.current.value)) {
		usuario.setError("");
		return 0;
	} else {
		usuario.setError("Introduzca un usuario");
		return 1;
	}
};

export const validateContraseña = (contraseña: any): number => {
	if (notEmpty(contraseña.ref.current.value)) {
		contraseña.setError("");
		return 0;
	} else {
		contraseña.setError("Introduzca una contraseña");
		return 1;
	}
};

export const validateText = (text: any): number => {
	if (notEmpty(text.ref.current.value)) {
		if (validText(text.ref.current.value)) {
			text.setError("Caracteres invalidos");
			return 1;
		} else {
			text.setError("");
			return 0;
		}
	} else {
		text.setError(`Introduzca un ${text.ref.current.name}!`);
		return 1;
	}
};

export const validateEmail = (email: any): number => {
	if (notEmpty(email.ref.current.value)) {
		if (validEmail(email.ref.current.value)) {
			email.setError("Correo invalido");
			return 1;
		} else {
			email.setError("");

			return 0;
		}
	} else {
		email.setError("Introduzca un correo!");
		return 1;
	}
};
