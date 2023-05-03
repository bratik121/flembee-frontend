import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		token: "",
		loged: false,
	},
	reducers: {
		setToken: (state, action: PayloadAction<User>) => {
			state.username = action.payload.username;
			state.token = action.payload.token;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.email = action.payload.email;
			state.loged = true;
		},
		removeToken: (state) => {
			state.username = "";
			state.token = "";
			state.firstName = "";
			state.lastName = "";
			state.email = "";
			state.loged = false;
		},
	},
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
