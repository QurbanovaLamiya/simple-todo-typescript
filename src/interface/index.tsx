export interface TodoType {
  item: {
    id: string;
    text: string;
  }[];

  deleteTodo: (todoId: string) => void;
}

export interface TodoAddType {
  todoAdd: (todoText: string) => void;
}

export interface Todo {
  id: string;
  text: string;
}
