import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { Auth, Register } from "../../types/types";

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
	}),
});

export const { useLoginMutation } = apiSlice;
