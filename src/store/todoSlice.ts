import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ToDo } from "../models/todo.model";

export type SliceState = {
  todos: ToDo[];
};

const initialState: SliceState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: SliceState, action: PayloadAction<ToDo>) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    removeTodo: (state: SliceState, action: PayloadAction<ToDo>) => {
      return {
        ...state,
        todos: state.todos.filter((t: ToDo) => t.id !== action.payload.id),
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = todoSlice;
export default todoSlice.reducer;

