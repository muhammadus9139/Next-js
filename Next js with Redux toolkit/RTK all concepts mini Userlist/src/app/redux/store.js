import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import usersReducer from "./slice";
import apiUsersReducer from "./apiSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        todos: todoReducer,
        apiUsers: apiUsersReducer
    }
});
