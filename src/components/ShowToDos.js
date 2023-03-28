import React, { useState, useEffect } from "react";
import { getToDos } from "../helper/api-functions";
import ToDo from "./ToDo";
function ShowToDos() {
  const [toDos, setToDos] = useState([]);
  const [showAll, setShowAll] = useState("no");
  useEffect(() => {
    getToDos().then((response) => {
      setToDos(response);
    });
  }, [toDos]);
  const filteredToDos = toDos.filter((todo) => {
    return todo.toDoIsImportant === showAll;
  });
  return (
    <div>
      <form className="container my-3 w-25">
        <select
          className="form-select"
          onChange={(e) => {
            setShowAll(e.target.value);
          }}
        >
          <option value="no">Not Important</option>
          <option value="yes">Important</option>
        </select>
      </form>
      {filteredToDos.map((todo) => {
        return (
          <ToDo
            username={todo.username}
            toDoName={todo.toDoName}
            toDoCompletionDateTime={todo.toDoCompletionDateTime}
            key={todo._id}
            id={todo._id}
            toDoIsImportant={todo.toDoIsImportant}
          />
        );
      })}
    </div>
  );
}

export default ShowToDos;
