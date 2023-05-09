import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../store/slice/todoSlice";

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  console.log(todos);
  return (
    <ul>
      {todos &&
        todos.map((item: any) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => dispatch(deleteTodo(item.id))}>del</button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
