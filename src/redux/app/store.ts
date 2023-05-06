import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";
import authSlice from "../features/authSlice";
import popUpSlice from "../features/popUpSlice";
import tasksSlice from "../features/tasksSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSlice,
		popUp: popUpSlice,
		tasks: tasksSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
