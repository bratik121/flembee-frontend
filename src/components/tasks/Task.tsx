import { Task as TaskType } from "../../types/types";
import {
	BsPencilSquare,
	BsCheck2Square,
	BsFillTrashFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Task({ task }: { task: TaskType }) {
	const handleDelete = (id: number) => {
		console.log(id);
	};
	return (
		<li className="tarea w-full border border-gray-900 border-x-0 first:border-t-0 last:border-b-0 even:border-y-0 hover:cursor-pointer hover:bg-slate-50 flex px-3">
			<div className="w-[50%]">
				<h4 className="">Titulo: {task.title}</h4>
				<p>Descripcion: {task.description}</p>
			</div>
			<div className="w-[50%] flex justify-end gap-9 items-center">
				<Link to={`/tasks/${task.id}`}>
					<BsPencilSquare className="text-2xl text-blue-600 hover:text-blue-500" />
				</Link>
				<BsCheck2Square className="text-2xl text-green-600 hover:text-green-500" />
				<BsFillTrashFill
					className="text-2xl text-red-600 hover:text-red-500"
					onClick={() => {
						handleDelete(task.id);
					}}
				/>
			</div>
		</li>
	);
}

export default Task;
