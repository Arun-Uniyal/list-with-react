import "./App.css";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import React, { useEffect, useState } from "react";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") == null) {
    console.log("There are no Todos");
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am deleting...", todo);
    const DeletedTodoList = todos.filter((e) => {
      return e !== todo;
    });
    setTodos(DeletedTodoList);
    localStorage.setItem("todos", JSON.stringify(DeletedTodoList));
  };
  // Add Todos
  const addToList = (title, desc) => {
    // console.log("I am adding todos", title, desc);
    const myTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    };
    console.log(localStorage.getItem("todos"));
    const AddedTodoList = [...todos, myTodo];
    setTodos(AddedTodoList);

    localStorage.setItem("todos", JSON.stringify(AddedTodoList));
  };
  // let todos = [
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [setTodos, todos]);

  return (
    <div className="App">
      <Header title={"My Todo List"} />
      <AddTodo add={addToList} />
      <Todos todoList={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
