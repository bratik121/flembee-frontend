import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: "",
		token: "",
		loged: false,
	},
	reducers: {
		setToken: (state, action: PayloadAction<User>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.loged = true;
		},
		removeToken: (state) => {
			state.user = "";
			state.token = "";
			state.loged = false;
		},
	},
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
