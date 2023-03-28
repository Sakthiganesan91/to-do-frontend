const express = require("express");
const toDoController = require("../controllers/toDoControllers");
const route = express.Router();

route.get("/", toDoController.getToDos);

route.get("/:id", toDoController.getToDosById);

route.post("/add", toDoController.postToDo);

route.put("/update/:id", toDoController.updateToDo);

route.delete("/delete/:id", toDoController.deleteToDo);

module.exports = route;
