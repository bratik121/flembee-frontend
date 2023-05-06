import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types/types";
const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [] as Task[],
	},
	reducers: {
		setTasks: (state, action: PayloadAction<Task[]>) => {
			state.tasks = action.payload;
		},
	},
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
