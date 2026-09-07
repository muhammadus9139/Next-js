

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const slice = createSlice({
    name:"adduserslice",
    initialState,
    reducers:{
        addUser:(state,action)=>{            
            const data={
                id:nanoid(),
                name:action.payload
            }

            state.users.push(data)
        },
        removeuser:(state,action)=>{
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        setUsers:(state,action)=>{
            state.users = action.payload
        }
    }
});

export const { addUser, removeuser, setUsers } = slice.actions;
export default slice.reducer;

