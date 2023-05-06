import { Task as TaskType } from "../../types/types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/app/store";
import { useNavigate } from "react-router-dom";
import { useGetTasksQuery } from "../../redux/api/api";
import { setTasks } from "../../redux/features/tasksSlice";
import Task from "./Task";
import Button from "../../elements/Button";

function Tasks() {
	const [tasksList, setTasksList] = useState<TaskType[]>([]);
	const user = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const { tasks } = useSelector((state: RootState) => state.tasks);
	const { data, isError, error, isLoading } = useGetTasksQuery(
		user.id as number
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading) {
			if (isError) {
				console.log(error);
			} else {
				setTasksList(data);
				dispatch(setTasks(data));
			}
		}
	}, [isLoading]);

	const handleClick = () => {
		navigate("/tasks/new");
	};

	return (
		<div className="w-full h-[800px] pt-12 flex flex-col gap-3  ">
			<h3>Bienvenido {user.firstName}</h3>
			<Button label="Aregar una Tarea" onClick={handleClick} />
			<ul className="grid grid-cols-1 b gap-4 px-20 mt-10">
				{tasksList.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
}

export default Tasks;
