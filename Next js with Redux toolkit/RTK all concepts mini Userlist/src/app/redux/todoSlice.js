import { createSlice , nanoid} from "@reduxjs/toolkit"

const initialState={
    todos:[]
}

const Slice= createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addtodos:(state,action)=>{
            const data= {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(data)
        }
    }
})


export const {addtodos} =Slice.actions;
export default Slice.reducer;
