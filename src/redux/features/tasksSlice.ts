import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types/types";
const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [] as Task[],
	},
	reducers: {},
});

export default tasksSlice.reducer;
