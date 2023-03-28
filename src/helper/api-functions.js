import axios from "axios";

export const addTodo = async (todo) => {
  try {
    const response = await axios.post("http://localhost:9000/todo/add", {
      ...todo,
    });

    return response.data.message;
  } catch (error) {
    return error;
  }
};

export const getToDosById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:9000/todo/${id}`);

    return response.data.todo;
  } catch (error) {}
};

export const getToDos = async () => {
  try {
    const response = await axios.get("http://localhost:9000/todo/");

    return response.data.todo;
  } catch (error) {}
};

export const updateToDos = async (id, todo) => {
  try {
    await axios.put(`http://localhost:9000/todo/update/${id}`, {
      ...todo,
    });
  } catch (error) {}
};

export const deleteToDo = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:9000/todo/delete/${id}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
