import React, { useState } from "react";
import ShowToDos from "../components/ShowToDos";
import ToDoForm from "../components/ToDoForm";
function ToDoPage() {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <ToDoForm cancel={showHandler} />
      ) : (
        <div className="text-center">
          <button className="btn btn-success w-50" onClick={showHandler}>
            Add Task
          </button>
        </div>
      )}
      <ShowToDos />
    </>
  );
}

export default ToDoPage;
