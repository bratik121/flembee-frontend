import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../elements/Button";
function TaskPage() {
	const { taskId } = useParams();
	const [newTask, setNewTask] = useState({
		title: "",
		description: "",
	});

	useEffect(() => {
		if (taskId) {
			console.log(taskId);
		}
	}, []);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setNewTask({ ...newTask, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(newTask);
	};

	return (
		<div className="w-full flex flex-col items-center gap-2 pt-12">
			<h2 className="">Añadiendo una nueva tarea</h2>
			<form
				className="w-[80%] flex flex-col border border-gray-700 rounded-lg p-5 gap-5"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<input
					className="border border-gray-500 rounded-md p-2"
					name="title"
					type="text"
					placeholder="tittle"
					onChange={(e) => {
						handleChange(e);
					}}
					value={newTask.title}
				/>
				<textarea
					className="border border-gray-500 rounded-md p-2 min-h-[50px]"
					name="description"
					id=""
					placeholder="description"
					onChange={(e) => {
						handleChange(e);
					}}
					value={newTask.description}
				></textarea>
				<Button
					label="Añadir tarea"
					submit={true}
					onClick={() => {
						handleSubmit;
					}}
				/>
			</form>
		</div>
	);
}

export default TaskPage;
