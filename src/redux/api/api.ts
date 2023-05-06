import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { Auth, Register, NewTask, UpdateTask } from "../../types/types";

export const apiSlice = createApi({
	reducerPath: "api",
	tagTypes: ["Api"],
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
			providesTags: ["Api"],
		}),
		addTask: builder.mutation({
			query: (newTask: NewTask): any => ({
				url: `tasks`,
				method: "POST",
				body: newTask,
			}),
			invalidatesTags: ["Api"],
		}),
		updateTask: builder.mutation({
			query: (task: UpdateTask): any => ({
				url: `tasks/update/${task.id}`,
				method: "PATCH",
				body: {
					title: task.title,
					description: task.description,
					userId: task.userId,
				},
			}),
			invalidatesTags: ["Api"],
		}),
		deleteTask: builder.mutation({
			query: (id: number): any => ({
				url: `tasks/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Api"],
		}),
		completeTask: builder.mutation({
			query: (id: number): any => ({
				url: `tasks/complete/${id}`,
				method: "PATCH",
			}),
			invalidatesTags: ["Api"],
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useGetTasksQuery,
	useAddTaskMutation,
	useUpdateTaskMutation,
	useDeleteTaskMutation,
	useCompleteTaskMutation,
} = apiSlice;
