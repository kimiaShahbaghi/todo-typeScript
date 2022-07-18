import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./modals/todo";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const deleteItemHandler = (todoId: string) => {
  setTodos((prev)=>{
    return prev.filter(todo => todo.id !== todoId)
  })
  }

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;

