import React from "react";
import Todo from "./Todo";
import "./BlankItem.css";
import logo from "../../src/logo.svg";

export const Todos = (props) => {
  return (
    <div className="container-fluid bg-primary p-3 middle-area">
      <h3>Todos:</h3>
      <div className="row">
        {props.todoList.length === 0 ? (
          <div>
            <img src={logo} className="img-fluid" alt="Logo" width={150} />
            <h3>There are no Todos to display</h3>
          </div>
        ) : (
          props.todoList.map((todo) => {
            return (
              <Todo todo={todo} onDelete={props.onDelete} key={todo.sno} />
            );
          })
        )}
      </div>
    </div>
  );
};
