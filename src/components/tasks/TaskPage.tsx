import { useParams } from "react-router-dom";
import { useEffect, RefObject } from "react";
import { useInput, usePopUp, useLoading } from "../../hooks/hooks";
import { validateText, validateEmpty } from "../../utils/validations";
import { NewTask, UpdateTask } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddTaskMutation, useUpdateTaskMutation } from "../../redux/api/api";
import { RootState } from "../../redux/app/store";
import Spinner from "../../elements/Spinner";
import Button from "../../elements/Button";
function TaskPage() {
	const { taskId } = useParams();
	const navigate = useNavigate();
	const titleInput = useInput();
	const userId = useSelector((state: RootState) => state.auth.id);
	const tasks = userId
		? useSelector((state: RootState) => state.tasks.tasks)
		: null;
	const descriptionInput = useInput();
	const taskPageLoading = useLoading();
	const [addNewTask] = useAddTaskMutation();
	const [updateTask] = useUpdateTaskMutation();
	const taskPagePopUp = usePopUp(
		`${taskId ? "Tarea modificada con extio" : "Tarea agregada con exito"}`
	);

	useEffect(() => {
		if (tasks) {
			const task = tasks.find((task) => task.id === Number(taskId));
			if (task) {
				titleInput.ref.current!.value = task.title;
				descriptionInput.ref.current!.value = task.description;
			}
		}
	}, []);

	const addTask = async (task: NewTask) => {
		taskPageLoading.setLoading(true);
		const result: any = await addNewTask(task);
		const { code, message } = result.data;
		if (code === 201) {
			taskPagePopUp.execute();
		} else {
			taskPageLoading.setMessage(message);
		}

		taskPageLoading.setLoading(false);
	};

	const handleAddTask = () => {
		const newTask: NewTask = {
			title: titleInput.ref.current?.value!,
			description: descriptionInput.ref.current?.value!,
			userId: userId as number,
		};
		addTask(newTask);
	};

	const updateTaskF = async (task: UpdateTask) => {
		taskPageLoading.setLoading(true);
		const result: any = await updateTask(task);
		console.log(result);
		const { code, message } = result.data;
		if (code === 200) {
			taskPagePopUp.execute();
			navigate("/tasks");
		}
		taskPageLoading.setMessage(message);
		taskPageLoading.setLoading(false);
	};
	const handleUpdateTask = () => {
		const updateTask: UpdateTask = {
			id: Number(taskId),
			title: titleInput.ref.current?.value!,
			description: descriptionInput.ref.current?.value!,
			userId: userId as number,
		};
		updateTaskF(updateTask);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		let flags = 0;
		flags += validateText(titleInput);
		flags += validateEmpty(descriptionInput);
		if (flags === 0) {
			taskId ? handleUpdateTask() : handleAddTask();
			titleInput.truncate();
			descriptionInput.truncate();
		}
	};

	return (
		<div className="w-full flex flex-col items-center gap-2 pt-12">
			{" "}
			<h2 className="">{`${
				taskId ? "Modificando una tarea" : "Añadiendo una nueva tarea"
			}`}</h2>
			<form
				className="w-[80%] flex flex-col border border-gray-700 rounded-lg px-10 py-5 gap-5 items-center"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				{taskPageLoading.loading ? (
					<Spinner />
				) : (
					<>
						{" "}
						<input
							className="border border-gray-500 rounded-md p-2 w-full"
							ref={titleInput.ref as RefObject<HTMLInputElement>}
							name="titulo"
							type="text"
							placeholder="Titulo"
						/>
						<span className="text-red-400 self-start pl-2">
							{titleInput.error}
						</span>
						<textarea
							className="border border-gray-500 rounded-md p-2 min-h-[50px] w-full"
							name="descripcion"
							ref={descriptionInput.ref as RefObject<HTMLTextAreaElement>}
							id=""
							placeholder="Descripcion"
						></textarea>
						<span className="text-red-400 self-start pl-2">
							{descriptionInput.error}
						</span>
						<span className="text-red-400">{taskPageLoading.message}</span>
						<Button
							label={`${taskId ? "Modificar" : "Agregar"} tarea`}
							submit={true}
							onClick={() => {
								handleSubmit;
							}}
						/>
					</>
				)}
			</form>
		</div>
	);
}

export default TaskPage;
