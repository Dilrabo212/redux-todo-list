import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";//createAsyncThunk 

const BASE_URL = "http://localhost:7000/todos";

export const getTodosAsaync = createAsyncThunk(
    'todos/getTodosAsaync',
    async()=>{
        const response = await fetch(BASE_URL);
        if(response.ok){
            const todos = await response.json();
            return {todos};
        }
    }
);

export const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodos:(state,action)=>{
            const newTodos={
                id:Date.now(),
                title:action.payload.title,
                completed:false
            }
            state.push(newTodos)
            
        }, 
        toggleComplate:(state,action)=>{
            const index = state.findIndex((todo)=>todo.id===action.payload.id);

            state[index].completed = !state[index].completed;
        },
        deleteTodos:(state,action)=>{
            console.log(action.payload.id);
           return state.filter((todo)=>todo.id!==action.payload.id);   

        },
    },
    extraReducers:{
        [getTodosAsaync.fulfilled]:(state,action)=>{
            return action.payload.todos;
        }
    }

});

export const { addTodos ,toggleComplate,deleteTodos } = todoSlice.actions;
export default todoSlice.reducer