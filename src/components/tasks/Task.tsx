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

function Task({ task }: { task: TaskType }) {
	const [deleteTask] = useDeleteTaskMutation();
	const [completeTask] = useCompleteTaskMutation();

	const handleDelete = async (id: number) => {
		const response = await deleteTask(id);
		console.log(response);
	};
	const handleComplete = async (id: number) => {
		const response = await completeTask(id);
		console.log(response);
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
							<BsPencilSquare className="text-2xl text-blue-600 hover:text-blue-500" />
						</Link>
						<BsCheck2Square
							className="text-2xl text-green-600 hover:text-green-500"
							onClick={() => {
								handleComplete(task.id);
							}}
						/>
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
