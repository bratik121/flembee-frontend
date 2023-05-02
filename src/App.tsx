import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Tasks from "./components/tasks/Tasks";
import TaskPage from "./components/tasks/TaskPage";
import "./App.css";

function App() {
	return (
		<div>
			<Header />
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
