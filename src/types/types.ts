type User = {
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	password: string;
	token: string;
};

type Auth = {
	username: string;
	password: string;
};

type Task = {
	tite: string;
	description: string;
	date: string;
	status: string;
	userId: number;
};

export type { User, Auth, Task };
