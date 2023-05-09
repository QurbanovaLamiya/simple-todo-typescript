import React from "react";
import "./style/index.scss";
import TodoList from "./components/TodoList";
import ToDo from "./components/ToDo";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>ToDO APP</h1>
      <ToDo />
      <TodoList />
    </div>
  );
};

export default App;
