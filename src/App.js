import "./App.css";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am deleting...", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  // let todos = [
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "First Todos Item",
      desc: "lorem ipsum dolor sit",
    },
    {
      sno: 2,
      title: "Second Todos Item",
      desc: "lorem ipsum dolor sit",
    },
    {
      sno: 3,
      title: "Third Todos Item",
      desc: "lorem ipsum dolor sit",
    },
    {
      sno: 4,
      title: "Fourth Todos Item",
      desc: "lorem ipsum dolor sit",
    },
    {
      sno: 5,
      title: "Fifth Todos Item",
      desc: "lorem ipsum dolor sit",
    },
  ]);
  return (
    <div className="App">
      <Header title={"My Todo List"} />
      <Todos todoList={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
