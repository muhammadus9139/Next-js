import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "apiUsers/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/users");

            if (!response.ok) {
                throw new Error("Unable to fetch users");
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    data: [],
    status: "idle",
    error: null
};

const apiSlice = createSlice({
    name: "apiUsers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || "Something went wrong";
            });
    }
});

export default apiSlice.reducer;
