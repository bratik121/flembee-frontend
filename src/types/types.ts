type User = {
	name: string;
	lastname: string;
	email: string;
	user: string;
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
};

export type { User, Auth, Task };
