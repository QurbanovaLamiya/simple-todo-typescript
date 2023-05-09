import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slice/todoSlice";

const ToDo: React.FC = () => {
  const dispatch = useDispatch();
  let inputValue = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.current!.value) {
      dispatch(addTodo(inputValue.current!.value));
      inputValue.current!.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" ref={inputValue} name="todo" />
      </div>
      <button> Submit </button>
    </form>
  );
};

export default ToDo;
