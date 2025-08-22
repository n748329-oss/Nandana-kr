import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const markTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 fw-bold text-dark">Task Tracker</h2>

        <div className="input-group mb-4 shadow-sm">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Write your task here..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-primary px-4" onClick={addTask}>
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="list-group">
          {tasks.length === 0 && (
            <li className="list-group-item text-center text-muted py-3">
              No tasks yet. Add one!
            </li>
          )}

          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded-3 ${
                task.completed ? "list-group-item-success" : ""
              }`}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  fontSize: "1.1rem",
                }}
              >
                {task.text}
              </span>

              <div>
                <button
                  className={`btn btn-sm me-2 ${
                    task.completed ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => markTaskComplete(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
