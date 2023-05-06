import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { Auth, Register, NewTask } from "../../types/types";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["Api"],
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (login: Auth): any => ({
				url: "/auth/login",
				method: "POST",
				body: login,
			}),
		}),
		register: builder.mutation({
			query: (register: Register): any => ({
				url: "/auth/register",
				method: "POST",
				body: register,
			}),
		}),
		getTasks: builder.query({
			query: (userId: number): any => ({
				url: `tasks/${userId}`,
				method: "GET",
			}),
		}),
		addTask: builder.mutation({
			query: (newTask: NewTask): any => ({
				url: `tasks`,
				method: "POST",
				body: newTask,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useGetTasksQuery,
	useAddTaskMutation,
} = apiSlice;
