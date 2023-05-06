import { Task as TaskType } from "../../types/types";
import {
	BsPencilSquare,
	BsCheck2Square,
	BsFillTrashFill,
} from "react-icons/bs";
import {
	useDeleteTaskMutation,
	useCompleteTaskMutation,
} from "../../redux/api/api";
import { Link } from "react-router-dom";

function Task({
	task,
	setLoading,
}: {
	task: TaskType;
	setLoading: (loading: boolean) => void;
}) {
	const [deleteTask] = useDeleteTaskMutation();
	const [completeTask] = useCompleteTaskMutation();

	const handleDelete = async (id: number) => {
		setLoading(true);
		const response = await deleteTask(id);
		console.log(response);
		setLoading(false);
	};
	const handleComplete = async (id: number) => {
		setLoading(true);

		const response = await completeTask(id);
		console.log(response);

		setLoading(false);
	};
	return (
		<li className="tarea w-full border border-gray-900  py-3  hover:cursor-pointer hover:bg-slate-50 flex px-3">
			<div className="w-[50%]">
				<h4 className="">Titulo: {task.title}</h4>
				<p>Descripcion: {task.description}</p>
			</div>
			<div className="w-[50%] flex justify-end gap-9 items-center">
				{task.status === "PENDING" ? (
					<>
						{" "}
						<Link to={`/tasks/${task.id}`}>
							<BsPencilSquare
								className="text-2xl text-blue-600 hover:text-blue-500"
								onClick={() => {
									handleComplete(task.id);
								}}
							/>
						</Link>
						<BsCheck2Square className="text-2xl text-green-600 hover:text-green-500" />
						<BsFillTrashFill
							className="text-2xl text-red-600 hover:text-red-500"
							onClick={() => {
								handleDelete(task.id);
							}}
						/>
					</>
				) : (
					<span>Completada</span>
				)}
			</div>
		</li>
	);
}

export default Task;
