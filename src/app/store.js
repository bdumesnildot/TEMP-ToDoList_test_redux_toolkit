
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: true },
    { id: 2, text: "Ménage !", done: false },
  ],
  reducers: {
    addTask : (state, action) => {
      //action = {type: "todo/addTask", payload: "task description text"}
      const newTask = {
        id: Date.now(),
        text : action.payload,
        done: false,
      }
      state.push(newTask)
    },

    toggleTask : (state, action) => {
      //action = {type: "todo/toggleTask", payload: "id"}
      const task = state.find(t => t.id === action.payload);
      task.done = !task.done;
    },

    deleteTask : (state, action) => {
      //action = {type: "todo/deleteTask", payload: "id"}
      state = state.filter(t => t.id !== action.payload);
      return state;
    },
  }
})

export const {addTask, toggleTask, deleteTask} = todoSlice.actions;
/* redux actions creator that helps for dispatching
    const deleteTask = (id) => {
      return {type: "todo/deleteTask", payload: "id"}
    } 
*/

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})