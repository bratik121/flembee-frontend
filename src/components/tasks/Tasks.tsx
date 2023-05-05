import { Task as TaskType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { useNavigate } from "react-router-dom";
import Task from "./Task";
import Button from "../../elements/Button";

const tasks: TaskType[] = [
	{
		id: 1,
		title: "Tarea 1",
		description: "Descripcion 1",
		status: "PENDING",
		date: "2021-10-10",
		userId: 1,
	},
];
function Tasks() {
	const user = useSelector((state: RootState) => state.auth);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/tasks/new");
	};

	return (
		<div className="w-full h-[800px] pt-12 flex flex-col gap-3  ">
			<h3>Bienvenido {user.firstName}</h3>
			<Button label="Aregar una Tarea" onClick={handleClick} />
			<ul className="grid grid-cols-1 b gap-4 px-20 mt-10">
				{tasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
}

export default Tasks;
