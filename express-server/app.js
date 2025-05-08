const express = require('express');
const app = express();
const PORT = 3000;

// This middleware helps express understand incoming JSON data
app.use(express.json());

// Store all todos in memory
let todos = [];
let id = 1;

// GET - Retrieve all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST - Add a new todo
app.post('/todos', (req, res) => {
  const task = req.body.task;

  // If no task is provided, send an error response
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const newTodo = {
    id: id++,
    task: task
  };

  todos.push(newTodo); // Add the new todo to the array
  res.status(201).json(newTodo); // Send the new todo as a response
});

// DELETE - Remove a todo by ID
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);

  // Remove the todo from the array where its id matches
  todos = todos.filter(todo => todo.id !== todoId);

  // Respond with a success message
  res.json({ message: "Todo deleted successfully" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
