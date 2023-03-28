import React, { useEffect, useState } from "react";
import { getToDosById, updateToDos } from "../helper/api-functions";
import { useNavigate, useLocation } from "react-router-dom";

function ToDoForm() {
  const navigate = useNavigate();

  const loc = useLocation();
  const id = loc.state;
  const [toDo, setToDo] = useState({
    username: "",
    toDoName: "",
    toDoIsImportant: "",
    toDoCompletionDateTime: "",
  });

  useEffect(() => {
    getToDosById(id).then((res) => {
      setToDo(res);
      console.log(id);
    });
  }, [id]);
  const [message, setMessage] = useState("");

  const usernameHandler = (event) => {
    setToDo({
      ...toDo,
      username: event.target.value,
    });
  };
  const toDoNameHandler = (event) => {
    setToDo({
      ...toDo,
      toDoName: event.target.value,
    });
  };
  const toDoIsImportantHandler = (event) => {
    setToDo({
      ...toDo,
      toDoIsImportant: event.target.value,
    });
  };
  const toDoCompletionDateTimeHandler = (event) => {
    setToDo({
      ...toDo,
      toDoCompletionDateTime: event.target.value,
    });
  };

  const updateHandler = (event) => {
    event.preventDefault();
    console.log(toDo);

    if (
      toDo.username.length <= 0 ||
      toDo.toDoName.length <= 0 ||
      toDo.toDoCompletionDateTime.length <= 0
    ) {
      setMessage("Enter All Fields");
      return;
    }

    setToDo({
      username: "",
      toDoName: "",
      toDoIsImportant: "no",
      toDoCompletionDateTime: "",
    });
    setMessage("");
    updateToDos(id, toDo);
    navigate("/");
  };
  const cancelHandler = () => {
    navigate("/");
  };
  return (
    <>
      <form className="container">
        <div>
          <label className="form-label">Username</label>

          <input
            type="text"
            onChange={usernameHandler}
            value={toDo.username}
            className="form-control"
          />
        </div>

        <div>
          <label className="form-label">Task Name</label>

          <input
            type="text"
            onChange={toDoNameHandler}
            value={toDo.toDoName}
            className="form-control"
          />
        </div>

        <div>
          <label className="form-label">Is Important</label>

          <select
            type="text"
            onChange={toDoIsImportantHandler}
            value={toDo.toDoIsImportant}
            className="form-control"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <label className="form-label">End Date / Time</label>

          <input
            type="datetime-local"
            onChange={toDoCompletionDateTimeHandler}
            value={toDo.toDoCompletionDateTime}
            className="form-control"
          />
        </div>
        {message ? (
          <p className="text-danger lead my-1">
            <b>{message}</b>{" "}
          </p>
        ) : null}
        <button className="btn btn-primary my-2" onClick={updateHandler}>
          Update Task
        </button>
        <button className="btn btn-danger mx-1" onClick={cancelHandler}>
          Cancel
        </button>
      </form>
    </>
  );
}

export default ToDoForm;
