const ToDo = require("../models/ToDoSchema");

const getToDos = async (req, res) => {
  try {
    const todo = await ToDo.find({});
    res.status(200).json({
      todo: todo,
    });
  } catch (error) {
    res.status(400).json({
      err: error,
    });
  }
};

const getToDosById = async (req, res) => {
  const _id = req.params.id;
  try {
    const todo = await ToDo.findOne({ _id });
    res.status(200).json({
      todo: todo,
    });
  } catch (error) {
    res.status(400).json({
      err: error,
    });
  }
};

const postToDo = async (req, res) => {
  const username = req.body.username;
  const toDoName = req.body.toDoName;
  const toDoIsImportant = req.body.toDoIsImportant;
  const toDoCompletionDateTime = req.body.toDoCompletionDateTime;

  try {
    const todo = await ToDo.create({
      username,
      toDoName,
      toDoIsImportant,
      toDoCompletionDateTime,
    });

    res.status(200).json({
      todo: todo,
      message: "ToDo Created Successfully",
    });
  } catch (error) {
    res.status(400).json({
      err: error,
    });
  }
};

const updateToDo = async (req, res) => {
  const _id = req.params.id;

  const username = req.body.username;
  const toDoName = req.body.toDoName;
  const toDoIsImportant = req.body.toDoIsImportant;
  const toDoCompletionDateTime = req.body.toDoCompletionDateTime;

  const existingtoDo = ToDo.findOne({ _id });
  if (!existingtoDo) {
    throw Error;
  }

  try {
    const todo = await ToDo.findOneAndUpdate(
      { _id },
      {
        username,
        toDoName,
        toDoIsImportant,
        toDoCompletionDateTime,
      }
    );

    res.status(200).json({
      todo: todo,
      message: "ToDo Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      err: error,
    });
  }
};

const deleteToDo = async (req, res) => {
  const _id = req.params.id;

  try {
    const isExisting = await ToDo.findOne({ _id });
    if (!isExisting) {
      throw Error;
    }
    await ToDo.deleteOne({ _id });

    res.status(200).json({
      message: "ToDo Deleted",
    });
  } catch (error) {
    res.status(400).json({
      err: error,
    });
  }
};

module.exports = {
  getToDos,
  getToDosById,
  postToDo,
  updateToDo,
  deleteToDo,
};
