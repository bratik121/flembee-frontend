import { Task as TaskType } from "../../types/types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/app/store";
import { useNavigate } from "react-router-dom";
import { useGetTasksQuery } from "../../redux/api/api";
import { setTasks } from "../../redux/features/tasksSlice";
import { useLoading } from "../../hooks/hooks";
import Task from "./Task";
import Spinner from "../../elements/Spinner";
import Button from "../../elements/Button";

function Tasks() {
	const [tasksList, setTasksList] = useState<TaskType[]>([]);
	const user = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const tasksLoading = useLoading();
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
		<div className="w-full h-[800px] pt-12 flex flex-col gap-3 items-center ">
			<h3 className="text-xl font-semibold">Bienvenido {user.firstName}</h3>
			<Button label="Aregar una Tarea" onClick={handleClick} />
			<h3 className="text-xl mt-12 ">Tareas por completar</h3>
			<ul className="grid grid-cols-1  px-20 mt-2 gap-2">
				{tasksLoading.loading ? (
					<Spinner />
				) : (
					<>
						{tasksList
							.filter((task) => task.status === "PENDING")
							.map((task) => (
								<Task key={task.id} task={task} />
							))}
					</>
				)}
			</ul>
			<h3 className="text-xl mt-12 ">Tareas Completadas</h3>
			<ul className="grid grid-cols-1  px-20 mt-2 ">
				{tasksList
					.filter((task) => task.status === "DONE")
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
			</ul>
		</div>
	);
}

export default Tasks;
