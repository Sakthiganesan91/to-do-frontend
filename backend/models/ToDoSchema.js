const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  toDoName: {
    type: String,
    required: true,
  },

  toDoIsImportant: {
    type: String,
    required: true,
  },

  toDoCompletionDateTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todos", ToDoSchema);
