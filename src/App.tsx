import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/app/store";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Tasks from "./components/tasks/Tasks";
import TaskPage from "./components/tasks/TaskPage";
import PopUp from "./elements/PopUp";
import "./App.css";

function App() {
	const { open, message } = useSelector((state: RootState) => state.popUp);
	return (
		<div>
			<Header />
			<AnimatePresence>{open && <PopUp message={message} />}</AnimatePresence>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/tasks/:taskId" element={<TaskPage />} />
			</Routes>
		</div>
	);
}

export default App;
