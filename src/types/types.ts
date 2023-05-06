type User = {
	id: number | null;
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	token: string;
};

type Register = {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
};

type Auth = {
	username: string;
	password: string;
};

type Task = {
	id: number;
	title: string;
	description: string;
	date: string;
	status: string;
	userId: number;
};

type NewTask = {
	title: string;
	description: string;
	userId: number;
};

type UpdateTask = {
	id: number;
	title: string;
	description: string;
	userId: number;
};

type PopUp = {
	open: boolean;
	message: string;
};

export type { User, Auth, Task, PopUp, Register, NewTask, UpdateTask };
