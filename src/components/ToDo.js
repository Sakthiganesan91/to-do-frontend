import React from "react";
import { deleteToDo } from "../helper/api-functions";

import { useNavigate } from "react-router-dom";
function ToDo(props) {
  const [date, time] = props.toDoCompletionDateTime.split("T");

  const navigate = useNavigate();

  const d = new Date(date);

  const deleteHandler = async () => {
    const response = await deleteToDo(props.id);
    alert(response.data.message);
  };

  const updateHandler = () => {
    navigate("/update", { state: props.id });
  };
  return (
    <>
      <div className="container border p-4 my-2 d-flex justify-content-between align-items-center">
        <div className="mx-4">
          <div>
            <h5>Username</h5>
            <p className="lead">
              <i>{props.username}</i>
            </p>
          </div>
          <div>
            <h5>Task Name</h5>
            <p>{props.toDoName.toUpperCase()}</p>
          </div>

          <div>
            <h5>Completion Date and Time</h5>
            <p>
              {d.toLocaleDateString("en-US")} <span>{time}</span>
            </p>
          </div>
        </div>
        <div className="mx-4 d-flex justify-content-between align-items-center">
          {props.toDoIsImportant === "yes" ? (
            <div>
              <span>
                <ion-icon name="alert-circle" size="large"></ion-icon>
              </span>
            </div>
          ) : null}
          <div>
            <button className="btn btn-info mx-1" onClick={updateHandler}>
              <ion-icon name="create-outline"></ion-icon>
            </button>
            <button className="btn btn-danger mx-1" onClick={deleteHandler}>
              <ion-icon name="trash-sharp"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
