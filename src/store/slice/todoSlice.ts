import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../interface";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: Math.floor(Math.random() * 100 + 1).toString(),
          text: action.payload,
        },
      ];
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (todosState: TodoState) => todosState.todos;

export default todoSlice.reducer;
